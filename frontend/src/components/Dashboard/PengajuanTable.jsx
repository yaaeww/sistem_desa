// src/components/Dashboard/PengajuanTable.jsx
import React from "react";

// UBAH DARI:
// export const PengajuanTable = ({ data }) => { ... }

// MENJADI:
const PengajuanTable = ({ data = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">No</th>
            <th className="py-2 px-4 border">Nama</th>
            <th className="py-2 px-4 border">Jenis Pengajuan</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{item.nama}</td>
              <td className="py-2 px-4 border">{item.jenis}</td>
              <td className="py-2 px-4 border">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    item.status === "Disetujui"
                      ? "bg-green-100 text-green-800"
                      : item.status === "Ditolak"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-4 border">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm mr-2">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// TAMBAHKAN INI DI AKHIR FILE:
export default PengajuanTable;
