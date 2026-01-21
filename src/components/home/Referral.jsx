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
      alert("⚠️ Please enter your name and your friend's mobile number.");
      return;
    }

    const mobile = form.friendMobile.replace(/\D/g, "");
    if (mobile.length !== 10) {
      alert("📱 Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hey ${form.friendName || "there"} 
Your friend *${form.yourName}* has invited you to join  
*PLAN B THE GYM – Mysore*

Why you’ll love training with us:
• 🏋️ Modern gym facilities  
• 🚻 Separate comfort zones  
• 👨‍🏫 Expert trainers  

Try a free session today!
👉 https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE`;

    window.location.href = `https://wa.me/91${mobile}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-14 bg-gradient-to-r from-white to-red-200">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <p className="uppercase text-sm tracking-widest text-gray-600 mb-2">
          Stronger together, better together
        </p>

        <h2 className="uppercase italic font-extrabold text-[#2F6F5F] text-3xl sm:text-4xl mb-4">
          Bring a Friend. Train Together.
        </h2>

        <p className="text-gray-500 text-base mb-6">
          Invite your friend to experience PLAN B THE GYM.
          Send them a WhatsApp invite and grow stronger together.
        </p>

        {/* Inputs */}
        <div className="space-y-3 text-left">
          {[
            ["Your Full Name", "yourName"],
            ["Your Mobile Number", "yourMobile"],
            ["Your Email (Optional)", "yourEmail"],
            ["Friend’s Full Name", "friendName"],
            ["Friend’s Mobile Number", "friendMobile"],
          ].map(([placeholder, key]) => (
            <input
              key={key}
              className="w-full border px-4 py-2.5"
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
            className="mt-5 mx-auto flex justify-center  bg-[#2F6F5F] text-white uppercase font-bold px-8 py-3 rounded-xl border border-black transition hover:bg-white hover:text-[#2F6F5F] hover:scale-105"
          >
            Invite My Friend
          </button>
        </div>

      </div>
    </section>
  );
}
