import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      type = 'contact', // 'contact' | 'admission'
      nom = '',
      prenom = '',
      email = '',
      telephone = '',
      sujet = '',
      filiere = '',
      niveau = '',
      certification = '',
      message = '',
    } = data;

    const fullName = prenom ? `${prenom} ${nom}`.trim() : nom.trim();

    if (!fullName || (!telephone && !email)) {
      return NextResponse.json(
        { error: 'Nom et coordonnées (téléphone ou email) obligatoires.' },
        { status: 400 }
      );
    }

    const recipient = process.env.EMP_ADMIN_EMAIL || 'emp.administration@gmail.com';
    const isAdmission = type === 'admission';
    const subject = isAdmission
      ? `[EMP Admission] Nouvelle candidature : ${fullName} - ${filiere || 'Général'}`
      : `[EMP Contact] Nouveau message de ${fullName}${sujet ? ` - ${sujet}` : ''}`;

    const textContent = `
Nouvelle demande reçue depuis le site web EMP
==============================================
Type : ${isAdmission ? "Demande d'admission / Bourse" : 'Message de contact'}
Nom complet : ${fullName}
Téléphone : ${telephone || 'Non renseigné'}
Email : ${email || 'Non renseigné'}
${isAdmission ? `Filière souhaitée : ${filiere || 'Non précisé'}` : ''}
${isAdmission ? `Niveau scolaire : ${niveau || 'Non précisé'}` : ''}
${isAdmission ? `Certification visée : ${certification || 'Non précisé'}` : ''}
${sujet ? `Sujet : ${sujet}` : ''}

Message :
${message || 'Aucun message particulier fourni.'}

Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' })}
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #1e3a8a, #1a56db); color: #ffffff; padding: 28px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #dbeafe; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; padding: 4px 12px; background: #fef3c7; color: #b45309; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .msg-box { background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #1a56db; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 20px; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; }
    .contact-links { margin-top: 16px; display: flex; gap: 12px; }
    .btn { display: inline-block; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; }
    .btn-tel { background: #1a56db; color: #ffffff; }
    .btn-wa { background: #25d366; color: #ffffff; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>EMP — École des Métiers Professionnels</h1>
      <p>Notification de nouvelle demande en ligne</p>
    </div>
    <div class="content">
      <span class="badge">${isAdmission ? '🎓 Demande d\'admission & Bourse' : '💬 Message de Contact'}</span>
      
      <div class="field">
        <div class="label">Candidat / Demandeur</div>
        <div class="value">${fullName}</div>
      </div>

      <div class="field">
        <div class="label">Téléphone</div>
        <div class="value"><a href="tel:${telephone}" style="color: #1a56db; text-decoration: none; font-weight: 600;">${telephone || 'Non renseigné'}</a></div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email ? `<a href="mailto:${email}" style="color: #1a56db; text-decoration: none;">${email}</a>` : 'Non renseigné'}</div>
      </div>

      ${isAdmission ? `
      <div class="field">
        <div class="label">Filière souhaitée</div>
        <div class="value" style="color: #1e3a8a; font-weight: 700;">${filiere || 'Non précisé'}</div>
      </div>

      <div class="field">
        <div class="label">Niveau d'études actuel</div>
        <div class="value">${niveau || 'Non précisé'}</div>
      </div>

      <div class="field">
        <div class="label">Certification visée</div>
        <div class="value">${certification || 'Non précisé'}</div>
      </div>
      ` : ''}

      ${sujet ? `
      <div class="field">
        <div class="label">Sujet</div>
        <div class="value">${sujet}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">Message / Précisions</div>
        <div class="msg-box">${message || 'Aucun message particulier fourni.'}</div>
      </div>

      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px dashed #e2e8f0;">
        <div class="label">Actions rapides</div>
        <div style="margin-top: 8px;">
          ${telephone ? `<a href="tel:${telephone}" class="btn btn-tel" style="margin-right: 8px; color: #fff;">📞 Appeler le candidat</a>` : ''}
          ${telephone ? `<a href="https://wa.me/${telephone.replace(/[^0-9]/g, '')}" class="btn btn-wa" style="color: #fff;">💬 WhatsApp</a>` : ''}
        </div>
      </div>
    </div>
    <div class="footer">
      Email envoyé automatiquement depuis le site web de l'EMP (Tivaouane Peulh) • ${new Date().toLocaleDateString('fr-FR')}
    </div>
  </div>
</body>
</html>
`;

    // Check if SMTP environment variables are configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: process.env.SMTP_SERVICE || 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${fullName} (via EMP Website)" <${smtpUser}>`,
        to: recipient,
        replyTo: email || undefined,
        subject: subject,
        text: textContent,
        html: htmlContent,
      });
    } else {
      // In development or if credentials are pending, log the request clearly
      console.log('--- NOUVELLE DEMANDE EMP REÇUE ---');
      console.log(`Destinataire : ${recipient}`);
      console.log(`Sujet : ${subject}`);
      console.log(textContent);
      console.log('-----------------------------------');
    }

    return NextResponse.json({
      success: true,
      message: 'Votre demande a bien été envoyée. L\'équipe administrative de l\'EMP vous recontactera très rapidement.',
    });
  } catch (error) {
    console.error('Erreur API Contact / Admission:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter sur WhatsApp au 70 785 15 55.' },
      { status: 500 }
    );
  }
}
