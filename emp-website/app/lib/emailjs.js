import emailjs from '@emailjs/browser';

/**
 * Envoie un email via EmailJS avec les identifiants configurés
 * @param {Object} params - Les données du formulaire
 * @returns {Promise<boolean>} - true si envoyé par EmailJS, false sinon
 */
export async function sendEmailJS(params) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_3w39t4r';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_9grjme4';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'jxQMJyapyYihlYbrv';

  if (!serviceId || !templateId || !publicKey) {
    return false;
  }

  const fullName = params.nom || params.prenom ? `${params.prenom || ''} ${params.nom || ''}`.trim() : 'Visiteur EMP';
  const contactPhone = params.telephone || params.phone || 'Non renseigné';
  const contactEmail = params.email || 'Non renseigné';
  const requestType = params.type === 'admission' ? "Demande d'admission / Bourse" : 'Message de contact';
  const messageBody = params.message || 'Aucun message particulier fourni.';
  const dakarDate = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' });

  try {
    const res = await emailjs.send(
      serviceId,
      templateId,
      {
        to_email: 'emp.administration@gmail.com',
        to_name: 'Administration EMP',
        name: fullName,
        from_name: fullName,
        email: contactEmail,
        from_email: contactEmail,
        reply_to: contactEmail !== 'Non renseigné' ? contactEmail : undefined,
        phone: contactPhone,
        telephone: contactPhone,
        filiere: params.filiere || 'Non précisé',
        niveau: params.niveau || 'Non précisé',
        certification: params.certification || 'Non précisé',
        sujet: params.sujet || requestType,
        subject: params.sujet || requestType,
        type: requestType,
        message: messageBody,
        date: dakarDate,
      },
      publicKey
    );
    return res.status === 200;
  } catch (error) {
    console.warn('Erreur EmailJS (bascule vers API interne):', error);
    return false;
  }
}
