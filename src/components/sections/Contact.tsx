import React, { useState } from 'react';
import { Mail, Phone, Linkedin, X } from 'lucide-react';
import { SectionId } from '../../data/types';
import { CONTACT_INFO } from '../../data/constants';

// ---------------------------------------------------------------------------
// QR Code Modal
// ---------------------------------------------------------------------------
interface QrModalProps {
  onClose: () => void;
}

const QrModal: React.FC<QrModalProps> = ({ onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label="Viber QR Code"
  >
    <div
      className="relative p-6 rounded-xl shadow-2xl max-w-xs w-full animate-fade-up"
      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
      onClick={e => e.stopPropagation()}
    >
      <button
        id="qr-modal-close"
        onClick={onClose}
        aria-label="Close QR modal"
        className="absolute top-3 right-3 p-1 rounded-md transition-colors"
        style={{ color: 'var(--text-muted)' }}
      >
        <X size={20} />
      </button>

      <h4
        className="text-lg font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Scan on Viber
      </h4>

      <div
        className="rounded-lg p-2"
        style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <img
          src={CONTACT_INFO.viberQrImage}
          alt="Viber QR Code"
          className="w-full h-auto rounded"
          onError={e => {
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.innerHTML =
                '<p class="text-sm py-8 text-center" style="color:var(--text-muted)">QR image not found.<br/><span style="font-size:0.75rem">Upload viber_qr.png to public/assets/images/</span></p>';
            }
          }}
        />
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Contact section
// ---------------------------------------------------------------------------
const Contact: React.FC = () => {
  const [showQr, setShowQr] = useState(false);

  return (
    <section
      id={SectionId.CONTACT}
      className="py-20"
      style={{
        backgroundColor: 'var(--bg-dark-section)',
        borderTop: '1px solid var(--dark-border)',
      }}
    >
      <div className="section-container text-center">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--dark-text)' }}
        >
          Get In Touch
        </h2>
        <p
          className="text-sm mb-12 max-w-md mx-auto"
          style={{ color: 'var(--dark-text-muted)' }}
        >
          Open to opportunities in the power sector. Feel free to reach out through any of the channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">

          {/* Email */}
          <div className="flex flex-col items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--dark-border)',
              }}
            >
              <Mail size={18} style={{ color: 'var(--dark-text-muted)' }} />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--dark-text-muted)' }}>
              Email
            </span>
            <a
              id="contact-email"
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--dark-text)' }}
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Viber QR */}
          <div className="flex flex-col items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--dark-border)',
              }}
            >
              <Phone size={18} style={{ color: 'var(--dark-text-muted)' }} />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--dark-text-muted)' }}>
              Viber
            </span>
            <button
              id="contact-viber-qr"
              onClick={() => setShowQr(true)}
              className="text-sm font-medium underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: 'var(--dark-text)' }}
            >
              View QR Code
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--dark-border)',
              }}
            >
              <Linkedin size={18} style={{ color: 'var(--dark-text-muted)' }} />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--dark-text-muted)' }}>
              LinkedIn
            </span>
            <a
              id="contact-linkedin"
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--dark-text)' }}
            >
              {CONTACT_INFO.linkedinDisplay}
            </a>
          </div>
        </div>
      </div>

      {showQr && <QrModal onClose={() => setShowQr(false)} />}
    </section>
  );
};

export default Contact;
