"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiUserGroup } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const profiles = [
  {
    username: "chimi.bestme",
    display: "Chị Mi ở Bestme",
    initials: "CM",
    avatarBg: "#C9A163",
    following: "20",
    followers: "154.7K",
    likes: "5.8M",
    bio: "Gái thắng tỉnh có đứa em hơi phiền | Máy đồ tuỳ dụng 🤖",
    link: "linktr.ee/chimi9x",
  },
  {
    username: "cuongkido",
    display: "Cường kido",
    initials: "CK",
    avatarBg: "#0a1f44",
    following: "64",
    followers: "1.4M",
    likes: "22M",
    bio: "mua dùm 1 món trong shop đi. Để tui cưới vợ. Liên hệ: 2anhemmientay@gmail.com",
    link: "www.facebook.com/profile...",
  },
  {
    username: "hienlebds",
    display: "Lê Văn Hiền",
    initials: "LH",
    avatarBg: "#4a7c59",
    following: "156",
    followers: "248.8K",
    likes: "2.3M",
    bio: "Tuyển Dụng - Đào Tạo Môi Giới BĐS, Khu Vực Tp.HCM. Việc...",
    link: "",
  },
];

function TikTokCard({
  profile,
  delay,
}: {
  profile: (typeof profiles)[0];
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 rounded-2xl overflow-hidden transition-all duration-200"
    >
      {/* Top dark profile area */}
      <div className="px-5 pt-6 pb-4 flex flex-col items-center text-center gap-3">
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
          style={{ backgroundColor: profile.avatarBg }}
        >
          {profile.initials}
        </div>

        {/* Username + display name */}
        <div>
          <p className="text-white font-bold text-sm leading-tight">
            @{profile.username}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">{profile.display}</p>
        </div>

        {/* Follow / Message buttons */}
        <div className="flex gap-2 w-full">
          <button className="flex-1 py-1.5 rounded-full text-xs font-bold text-white bg-gold transition-opacity hover:opacity-90">
            Follow
          </button>
          <button className="flex-1 py-1.5 rounded-full text-xs font-bold text-white bg-gray-700 transition-opacity hover:opacity-90">
            Message
          </button>
        </div>

        {/* Stats row */}
        <div className="flex w-full justify-between text-center border-t border-gray-800 pt-3 mt-1">
          <div className="flex-1">
            <p className="text-white font-bold text-sm">{profile.following}</p>
            <p className="text-gray-500 text-xs">Following</p>
          </div>
          <div className="flex-1 border-x border-gray-800">
            <p className="text-white font-bold text-sm">{profile.followers}</p>
            <p className="text-gray-500 text-xs">Followers</p>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm">{profile.likes}</p>
            <p className="text-gray-500 text-xs">Likes</p>
          </div>
        </div>
      </div>

      {/* Bio + link */}
      <div className="px-5 pb-5 border-t border-gray-800">
        <p className="text-gray-400 text-xs leading-relaxed mt-3">
          {profile.bio}
        </p>
        {profile.link && (
          <p className="text-gold text-xs mt-2 truncate">{profile.link}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function CTA() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, #C9A163 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 w-125 h-125 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #0a1f44 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Part 1: CTA Cards ── */}
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-sm font-semibold mb-6"
          >
            <span>⚡</span>
            <span>Bắt đầu ngay</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4"
          >
            Bạn muốn TikTok nói thay bạn mỗi ngày?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed"
          >
            Xem bảng giá chi tiết hoặc liên hệ để bắt đầu hành trình xây dựng
            thương hiệu của bạn
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Card 1: Báo giá theo gói */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 transition-all duration-200 hover:border-gold"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <HiBriefcase className="w-6 h-6 text-gold" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 flex-1">
              <h3 className="text-xl font-black text-navy">Báo giá theo gói</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Chọn gói phù hợp cho brand của bạn
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => scrollTo("#bang-gia")}
              className="w-full py-3 rounded-full bg-gold text-navy font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md cursor-pointer"
            >
              Xem báo giá chi tiết
            </button>
          </motion.div>

          {/* Card 2: Tư vấn theo nhu cầu */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 transition-all duration-200 hover:border-navy"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(10,31,68,0.08)" }}>
              <HiUserGroup className="w-6 h-6 text-navy" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 flex-1">
              <h3 className="text-xl font-black text-navy">
                Tư vấn theo nhu cầu
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Doanh nghiệp cần số lượng video lớn hoặc vận hành dài hạn
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => scrollTo("#lien-he")}
              className="w-full py-3 rounded-full bg-navy text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md cursor-pointer"
            >
              Liên hệ ngay để được tư vấn
            </button>
          </motion.div>
        </div>

        {/* ── Part 2: Social Proof ── */}
        <div>
          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6"
          >
            Được tin tưởng bởi
          </motion.p>

          {/* TikTok profile cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profiles.map((profile, i) => (
              <TikTokCard key={profile.username} profile={profile} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
