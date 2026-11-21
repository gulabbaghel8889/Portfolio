import emailjs from '@emailjs/browser';

/**
 * Sends contact message via EmailJS.
 * Set these environment variables in .env:
 * VITE_EMAILJS_SERVICE_ID
 * VITE_EMAILJS_TEMPLATE_ID
 * VITE_EMAILJS_PUBLIC_KEY
 */
export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Fallback simulation mode if credentials are not yet configured in .env
  if (!serviceId || !templateId || !publicKey) {
    console.info(
      'EmailJS keys not detected in .env. Simulating successful message transmission for development mode:',
      formData
    );
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return {
      status: 'simulated',
      text: 'Message received! (Running in demo mode. Configure EmailJS in .env for live forwarding)',
    };
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject || 'Portfolio Contact Inquiry',
    message: formData.message,
    to_name: 'Gulab',
  };

  const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
  return {
    status: 'success',
    text: response.text,
  };
};
