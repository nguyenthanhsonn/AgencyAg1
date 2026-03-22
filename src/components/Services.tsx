"use client";

import { motion } from "framer-motion";
import {
  HiCheck,
  HiMinus,
  HiXMark,
  HiCurrencyDollar,
  HiCamera,
  HiUserGroup,
  HiUsers,
  HiBuildingOffice2,
} from "react-icons/hi2";
import { IconType } from "react-icons";

// ─── Types ───────────────────────────────────────────────────────────────────

type CellStatus = "check" | "dash" | "cross";

interface CellData {
  status: CellStatus;
  label: string;
}

interface TableRow {
  criteria: string;
  icon: IconType;
  shortPro: CellData;
  agency: CellData;
  freelancer: CellData;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const rows: TableRow[] = [
  {
    criteria: "Giá khởi điểm/video",
    icon: HiCurrencyDollar,
    shortPro: { status: "check", label: "Chỉ từ 500.000đ" },
    agency: { status: "dash", label: "2.000.000 - 5.000.000đ" },
    freelancer: { status: "check", label: "Chỉ từ 500.000đ" },
  },
  {
    criteria: "Thiết bị quay",
    icon: HiCamera,
    shortPro: { status: "check", label: "Sony A73/A74/FX3" },
    agency: { status: "dash", label: "Không cố định" },
    freelancer: { status: "dash", label: "Thiết bị cơ bản" },
  },
  {
    criteria: "Ekip quay",
    icon: HiUserGroup,
    shortPro: { status: "check", label: "3 người cố định" },
    agency: { status: "dash", label: "2-5 người" },
    freelancer: { status: "dash", label: "1 người" },
  },
  {
    criteria: "Tùy chọn diễn viên",
    icon: HiUsers,
    shortPro: { status: "check", label: "Đã bao gồm" },
    agency: { status: "cross", label: "Chưa bao gồm" },
    freelancer: { status: "cross", label: "Chưa bao gồm" },
  },
  {
    criteria: "Studio chuyên nghiệp",
    icon: HiBuildingOffice2,
    shortPro: { status: "check", label: "Đã bao gồm" },
    agency: { status: "cross", label: "Chưa bao gồm" },
    freelancer: { status: "cross", label: "Chưa bao gồm" },
  },
];

// ─── Animation ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

// ─── Status icon + label ─────────────────────────────────────────────────────

function StatusCell({ data }: { data: CellData }) {
  const { status, label } = data;

  if (status === "check") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/10">
          <HiCheck className="w-4 h-4 text-gold" />
        </span>
        <span className="text-xs font-semibold text-gold leading-tight text-center">
          {label}
        </span>
      </div>
    );
  }

  if (status === "dash") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
          <HiMinus className="w-4 h-4 text-gray-400" />
        </span>
        <span className="text-xs font-medium text-gray-500 leading-tight text-center">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
        <HiXMark className="w-4 h-4 text-red-400" />
      </span>
      <span className="text-xs font-medium text-gray-400 leading-tight text-center">
        {label}
      </span>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="dich-vu" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border border-gold/40 bg-gold/5 text-gold">
            <HiCheck className="w-3.5 h-3.5" />
            So sánh thực tế
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-center text-navy mb-4 leading-tight"
        >
          Đừng để cảm tính quyết định —
          <br />
          hãy để con số nói thay.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-12 max-w-xl mx-auto text-base"
        >
          Chọn đối tác phù hợp và bắt đầu hành trình xây dựng thương hiệu của bạn
        </motion.p>

        {/* Table card */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white border-t-4 border-t-gold"
        >
          <table className="w-full border-collapse">

            {/* ── Header ── */}
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">

                {/* Criteria column header */}
                <th className="text-left px-6 py-5 w-[34%]">
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                    Tiêu chí
                  </span>
                </th>

                {/* SHORT PRO. — highlighted */}
                <th className="px-4 py-5 text-center w-[22%]">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold text-navy text-[10px] font-black tracking-widest uppercase">
                      Khuyến nghị
                    </span>
                    <span className="text-gold font-black text-sm leading-none">
                      SHORT PRO.
                    </span>
                  </div>
                </th>

                {/* Agency */}
                <th className="px-4 py-5 text-center w-[22%]">
                  <span className="text-sm font-semibold text-gray-400">
                    Agency lớn
                  </span>
                </th>

                {/* Freelancer */}
                <th className="px-4 py-5 text-center w-[22%]">
                  <span className="text-sm font-semibold text-gray-400">
                    Freelancer
                  </span>
                </th>
              </tr>
            </thead>

            {/* ── Body ── */}
            <tbody>
              {rows.map((row, i) => {
                const Icon = row.icon;
                const isLast = i === rows.length - 1;
                return (
                  <tr
                    key={i}
                    className={`${isLast ? "" : "border-b border-gray-100"} bg-white hover:bg-gray-50/60 transition-colors duration-150`}
                  >
                    {/* Criteria */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-navy/5 shrink-0">
                          <Icon className="w-4 h-4 text-navy/60" />
                        </span>
                        <span className="text-sm font-semibold text-navy">
                          {row.criteria}
                        </span>
                      </div>
                    </td>

                    {/* SHORT PRO. — subtle gold column highlight */}
                    <td className="px-4 py-4 text-center bg-gold/3">
                      <StatusCell data={row.shortPro} />
                    </td>

                    {/* Agency */}
                    <td className="px-4 py-4 text-center">
                      <StatusCell data={row.agency} />
                    </td>

                    {/* Freelancer */}
                    <td className="px-4 py-4 text-center">
                      <StatusCell data={row.freelancer} />
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* ── Footer row ── */}
            <tfoot>
              <tr>
                <td
                  colSpan={4}
                  className="bg-gray-50 border-t border-gray-100 text-center py-4 text-sm font-semibold text-gray-500 tracking-wide"
                >
                  Tối ưu chi phí &amp; hiệu quả dài hạn với{" "}
                  <span className="text-gold font-bold">SHORT PRO.</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
