import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pendidikan</h2>
        </div>
        <RowRiwayat jenjang="SD" sekolah="SDN 2 SAWAHDADAP" tahun="2007-2013" />
        <RowRiwayat jenjang="SMP" sekolah="SMPN 2 JATINANGOR" tahun="2013-2016" />
        <RowRiwayat jenjang="SMA" sekolah="SMAN CIMANGGUNG" tahun="2016-2019" />
        <RowRiwayat jenjang="SARJANA" sekolah="UNIVERSITAS MA'SOEM" tahun="2022-Sekarang" />
        </div>
    )
}