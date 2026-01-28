import { useState } from "react";

export default function Referral() {
  const [form, setForm] = useState({
    yourName: "",
    yourMobile: "",
    yourEmail: "",
    friendName: "",
    friendMobile: "",
  });

  const sendWhatsAppReferral = () => {
    if (!form.yourName || !form.friendMobile) {
      alert(" Please enter your name and your friend's mobile number.");
      return;
    }

    const mobile = form.friendMobile.replace(/\D/g, "");
    if (mobile.length !== 10) {
      alert(" Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hey ${form.friendName || "there"} 
Your friend *${form.yourName}* has invited you to join  
*PLAN B THE GYM – Mysore*

Why you’ll love training with us:
• Modern gym facilities  
• Separate comfort zones  
• Expert trainers  

Try a free session today!
https://chat.whatsapp.com/JsfMMkSXt3g0aecEOnTBCb`;

    window.location.href = `https://wa.me/91${mobile}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-section/10 via-surface/30 to-base/10">
      <div className="max-w-3xl mx-auto  text-textPrimary px-6 text-center">

        <p className="uppercase text-sm font-semibold tracking-widest text-textPrimary mb-2">
          Stronger together, better together
        </p>

        <h2 className="uppercase italic font-extrabold text-textPrimary text-3xl sm:text-4xl mb-4">
          Bring a Friend. Train Together.
        </h2>

        <p className="text-textPrimary  mb-6">
          Invite your friend to experience PLAN B THE GYM.
          Send them a WhatsApp invite and grow stronger together.
        </p>

        {/* Inputs */}
        <div className="space-y-3 text-left text-textPrimary">
          {[
            ["Your Full Name", "yourName"],
            ["Your Mobile Number", "yourMobile"],
            ["Your Email (Optional)", "yourEmail"],
            ["Friend’s Full Name", "friendName"],
            ["Friend’s Mobile Number", "friendMobile"],
          ].map(([placeholder, key]) => (
            <input
              key={key}
              className="w-full border border-divider bg-textSubtle px-4 py-2.5 text-textPrimary placeholder-textPrimary text-sm hover:border-buttonHover"
              placeholder={placeholder}
              value={form[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ))}

          <button
            type="button"
            onClick={sendWhatsAppReferral}
            className="mt-5 mx-auto flex justify-center  bg-button text-textPrimary uppercase font-bold px-8 py-3 rounded-xl border border-buttonBorder transition hover:bg-buttonHover  hover:scale-105"
          >
            Invite My Friend
          </button>
        </div>

      </div>
    </section>
  );
}