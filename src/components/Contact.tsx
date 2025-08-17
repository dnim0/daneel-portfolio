// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

type ToastType = 'success' | 'error' | 'info';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>(''); // email or phone
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{ open: boolean; type: ToastType; msg: string }>({
    open: false,
    type: 'success',
    msg: '',
  });

  const form = useRef<HTMLFormElement | null>(null);

  // EmailJS creds 
  const SERVICE_ID = 'service_daneel';
  const TEMPLATE_ID = 'template_n6nfcgw';
  const PUBLIC_KEY  = 'aZ_OPPciPGBCxPWgj';

  const isValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');
    if (!isValid || loading) return;

    setLoading(true);
    const time = new Date().toLocaleString(); // for {{time}}

    const templateParams = {
      name,
      email,
      time,
      message,
      reply_to: email,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setToast({ open: true, type: 'success', msg: 'Thanks! Your message has been sent.' });
        setName('');
        setEmail('');
        setMessage('');
        form.current?.reset();
      })
      .catch((err: unknown) => {
        console.error('EmailJS error:', err); // why: keep details in console
        setToast({
          open: true,
          type: 'error',
          msg: 'Something went wrong sending your message. Please try again later.',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>ontact Me</h1>
          <p>
            Ready to transform your business with AI? Let's get in touch and discuss
            how I can help achieve your goals.
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                autoComplete="name"
              />
              <TextField
                required
                id="contact-email"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                autoComplete="email"
              />
            </div>

            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={loading ? <CircularProgress size={18} /> : <SendIcon />}
              disabled={!isValid || loading}
            >
              {loading ? 'Sending…' : 'Send'}
            </Button>
          </Box>

          <Snackbar
            open={toast.open}
            autoHideDuration={4000}
            onClose={() => setToast((t) => ({ ...t, open: false }))}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              severity={toast.type}
              variant="filled"
              onClose={() => setToast((t) => ({ ...t, open: false }))}
              sx={{ width: '100%' }}
            >
              {toast.msg}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
