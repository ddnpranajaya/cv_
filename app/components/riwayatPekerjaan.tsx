import RowRiwayatPekerjaan from "./rowRiwayatPekerjaan"
export default function RiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pekerjaan</h2>
        </div>
        <RowRiwayatPekerjaan instansi="GRAMEDIA" sebagai="Karyawan" tahun="2020-2022" />
        <RowRiwayatPekerjaan instansi="KOMPAS" sebagai="Redaksi" tahun="2022-2024" />
        <RowRiwayatPekerjaan instansi="NETMEDIATAMA" sebagai="Produser" tahun="2024-2026" />
        <RowRiwayatPekerjaan instansi="KOMPAS TV" sebagai="Produser" tahun="2026" />
        </div>
    )
}