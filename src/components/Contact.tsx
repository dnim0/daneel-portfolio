import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

type ToastType = 'success' | 'error' | 'info';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function Contact() {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>(''); // email or phone
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{ open: boolean; type: ToastType; msg: string }>({
    open: false, type: 'success', msg: '',
  });

  const form = useRef<HTMLFormElement | null>(null);

  // EmailJS (your working values)
  const SERVICE_ID = 'service_daneel';
  const TEMPLATE_ID = 'template_n6nfcgw';
  const PUBLIC_KEY  = 'aZ_OPPciPGBCxPWgj';

  const phoneLike = (s: string) => s.replace(/[^\d]/g, '').length >= 7;
  const isValid =
    name.trim() !== '' &&
    contact.trim() !== '' &&
    message.trim() !== '' &&
    (EMAIL_RE.test(contact) || phoneLike(contact));

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    const hp = (form.current?.elements.namedItem('company') as HTMLInputElement | null)?.value || '';
    if (hp) return;

    setNameError(name.trim() === '');
    setContactError(contact.trim() === '' || (!EMAIL_RE.test(contact) && !phoneLike(contact)));
    setMessageError(message.trim() === '');
    if (!isValid || loading) return;

    setLoading(true);
    const time = new Date().toLocaleString();
    const isEmail = EMAIL_RE.test(contact);

    const templateParams = {
      name,
      email: isEmail ? contact : '',
      phone: isEmail ? '' : contact,
      message,
      time,
      from_name: 'AIzamo Website',
      from_email: 'noreply@aizamo.com',
      reply_to: isEmail ? contact : 'noreply@aizamo.com',
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setToast({ open: true, type: 'success', msg: 'Thanks! Your message has been sent.' });
        setName(''); setContact(''); setMessage('');
        form.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setToast({ open: true, type: 'error', msg: 'Could not send. Please try again later.' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-section" aria-live="polite">
      <div className="items-container contact-container">
        <div className="contact-card">
          {/* Gradient banner (now uses your accent shades) */}
          <div className="contact-banner">
            <div className="badge">Let’s work together</div>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">Ready to transform your business with AI?</p>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            {/* Honeypot */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp-field" />

            <div className="form-grid">
              <TextField
                required
                id="contact-name"
                label="Your name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ' '}
                autoComplete="name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                id="contact-contact"
                label="Email (or phone)"
                placeholder="name@company.com or +1 555 123 4567"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                error={contactError}
                helperText={contactError ? 'Enter a valid email or phone number' : ' '}
                autoComplete="email"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Tell me about your project, goals, and timeline…"
              multiline
              minRows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ' '}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />

            <div className="contact-actions">
              <Button
                type="submit"
                className="contact-button"
                variant="contained"
                endIcon={loading ? <CircularProgress size={18} /> : <SendIcon />}
                disabled={!isValid || loading}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </Button>
            </div>
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
    </section>
  );
}

export default Contact;