/* ============================================================
   FORM.JS — Formulir Pengajuan Konsultasi Publik
   Klinik Konsultasi APIP · Inspektorat Kab. Empat Lawang
   ============================================================ */

// ─── DATA MASTER INSTANSI ────────────────────────────────────
const INSTANSI_DATA = {

  opd: {
    label: 'OPD',
    unitLabel: 'Nama OPD',
    units: [
      'Dinas Pendidikan dan Kebudayaan',
      'Dinas Kesehatan',
      'Dinas Pekerjaan Umum dan Penataan Ruang',
      'Dinas Perumahan Rakyat dan Kawasan Permukiman',
      'Dinas Sosial',
      'Dinas Pemberdayaan Masyarakat dan Desa',
      'Dinas Kependudukan dan Pencatatan Sipil',
      'Dinas Pengendalian Penduduk dan KB',
      'Dinas Pertanian',
      'Dinas Perikanan',
      'Dinas Perdagangan, Koperasi dan UKM',
      'Dinas Lingkungan Hidup',
      'Dinas Komunikasi dan Informatika',
      'Dinas Penanaman Modal dan PTSP',
      'Dinas Kepemudaan dan Olahraga',
      'Dinas Perpustakaan dan Kearsipan',
      'Dinas Pariwisata',
      'Badan Perencanaan Pembangunan Daerah',
      'Badan Pengelolaan Keuangan dan Aset Daerah',
      'Badan Kepegawaian dan Pengembangan SDM',
      'Badan Penanggulangan Bencana Daerah',
      'Badan Kesatuan Bangsa dan Politik',
      'Inspektorat Daerah',
      'Sekretariat Daerah',
      'Sekretariat DPRD',
      'Satuan Polisi Pamong Praja',
      'Kantor Kecamatan Pendopo',
      'Kantor Kecamatan Pendopo Barat',
      'Kantor Kecamatan Pasemah Air Keruh',
      'Kantor Kecamatan Muara Pinang',
      'Kantor Kecamatan Lintang Kanan',
      'Kantor Kecamatan Saling',
      'Kantor Kecamatan Ulu Musi',
      'Kantor Kecamatan Talang Padang',
    ]
  },

  kecamatan: {
    label: 'Kecamatan',
    unitLabel: 'Unit / Desa / Sekolah',
    units: {
      'Kecamatan Pendopo': [
        // Desa
        'Desa Bandar Agung','Desa Batu Cawang','Desa Bayau',
        'Desa Gunung Merakasa Lama','Desa Gunung Meraksa Baru',
        'Desa Jarakan','Desa Landur','Desa Lubuk Layang',
        'Desa Lubuk Sepang','Desa Manggilan','Desa Muara Karang',
        'Desa Nanjungan','Desa Sarang Bulan','Desa Tanjung Baru',
        'Desa Tanjung Eran','Desa Tanjung Raman',
        // SD
        'SDN 01 Pendopo','SDN 02 Pendopo','SDN 03 Pendopo','SDN 04 Pendopo',
        'SDN 05 Pendopo','SDN 06 Pendopo','SDN 07 Pendopo','SDN 08 Pendopo',
        'SDN 09 Pendopo','SDN 10 Pendopo','SDN 11 Pendopo','SDN 12 Pendopo',
        'SDN 13 Pendopo','SDN 14 Pendopo','SDN 15 Pendopo','SDN 16 Pendopo',
        'SDN 17 Pendopo','SDN 18 Pendopo','SDN 19 Pendopo','SDN 20 Pendopo',
        'SDN 21 Pendopo','SDN 22 Pendopo','SDN 23 Pendopo','SDN 24 Pendopo',
        'SDN 25 Pendopo','SDN 26 Pendopo','SDN 27 Pendopo',
        // SMP
        'SMPN 01 Pendopo','SMPN 02 Pendopo','SMPN 03 Pendopo','SMPN 04 Pendopo',
      ],
      'Kecamatan Pendopo Barat': [
        // Desa
        'Desa Air Kandis','Desa Karang Caya','Desa Kungkilan','Desa Lingge',
        'Desa Muara Lintang Baru','Desa Muara Lintang Lama','Desa Padang Bindu',
        'Desa Rantau Dodor','Desa Tanjung Raya','Desa Tebat Payang',
        // SD
        'SDN 01 Pendopo Barat','SDN 02 Pendopo Barat','SDN 03 Pendopo Barat',
        'SDN 04 Pendopo Barat','SDN 05 Pendopo Barat','SDN 06 Pendopo Barat',
        'SDN 07 Pendopo Barat','SDN 08 Pendopo Barat','SDN 09 Pendopo Barat',
        'SDN 10 Pendopo Barat',
        // SMP
        'SMPN 01 Pendopo Barat','SMPN 02 Pendopo Barat',
        'SMPN 03 Pendopo Barat','SMPN 04 Pendopo Barat',
      ],
      'Kecamatan Pasemah Air Keruh': [
        // Desa
        'Desa Air Mayam','Desa Bandar Agung','Desa Kebon Jati',
        'Desa Lawang Agung','Desa Muara Aman','Desa Muara Rungga',
        'Desa Muara Sindang','Desa Nanjungan','Desa Padang Bindu',
        'Desa Padang Gelai','Desa Pagar Jati','Desa Penantian',
        'Desa Talang Padang','Desa Talang Randai','Desa Tanjung Beringin',
        // SD
        'SDN 01 Pasemah Air Keruh','SDN 02 Pasemah Air Keruh',
        'SDN 03 Pasemah Air Keruh','SDN 04 Pasemah Air Keruh',
        'SDN 05 Pasemah Air Keruh','SDN 06 Pasemah Air Keruh',
        'SDN 07 Pasemah Air Keruh','SDN 08 Pasemah Air Keruh',
        'SDN 09 Pasemah Air Keruh','SDN 10 Pasemah Air Keruh',
        'SDN 11 Pasemah Air Keruh','SDN 12 Pasemah Air Keruh',
        'SDN 13 Pasemah Air Keruh','SDN 14 Pasemah Air Keruh',
        'SDN 15 Pasemah Air Keruh','SDN 16 Pasemah Air Keruh',
        'SDN 17 Pasemah Air Keruh',
        // SMP
        'SMPN 01 Pasemah Air Keruh','SMPN 02 Pasemah Air Keruh',
        'SMPN 03 Pasemah Air Keruh','SMPN 04 Pasemah Air Keruh',
      ],
      'Kecamatan Muara Pinang': [],
      'Kecamatan Lintang Kanan': [],
      'Kecamatan Saling': [],
      'Kecamatan Ulu Musi': [],
      'Kecamatan Talang Padang': [],
    }
  },

  puskesmas: {
    label: 'Puskesmas',
    unitLabel: 'Nama Puskesmas',
    units: [
      'Puskesmas Pendopo',
      'Puskesmas Pendopo Barat',
      'Puskesmas Pasemah Air Keruh',
      'Puskesmas Muara Pinang',
      'Puskesmas Lintang Kanan',
      'Puskesmas Saling',
      'Puskesmas Ulu Musi',
      'Puskesmas Talang Padang',
    ]
  },

  rs: {
    label: 'Rumah Sakit Pratama',
    unitLabel: 'Nama RS',
    units: [
      'Rumah Sakit Pratama Kecamatan Pendopo',
    ]
  }

};

// ─── TOGGLE DROPDOWN INSTANSI ────────────────────────────────
function toggleInstName() {
  const type      = document.getElementById('f-inst-type').value;
  const unitGroup = document.getElementById('f-unit-group');
  const unitLabel = document.getElementById('f-unit-label');
  const unitSel   = document.getElementById('f-unit');

  // Reset unit
  unitSel.innerHTML = '<option value="">— Pilih Unit —</option>';

  if (!type) {
    unitGroup.style.display = 'none';
    return;
  }

  unitGroup.style.display = 'block';
  const data = INSTANSI_DATA[type];
  unitLabel.innerHTML = `${data.unitLabel} <span class="req">*</span>`;

  if (type === 'kecamatan') {
    // Level 1: pilih kecamatan dulu
    Object.keys(data.units).forEach(kec => {
      const opt = document.createElement('option');
      opt.value = kec;
      opt.textContent = kec;
      unitSel.appendChild(opt);
    });
    unitLabel.innerHTML = 'Kecamatan <span class="req">*</span>';
    // Pasang event untuk sub-unit
    unitSel.onchange = showSubUnit;
  } else {
    // Langsung tampil daftar unit
    data.units.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u;
      opt.textContent = u;
      unitSel.appendChild(opt);
    });
    unitSel.onchange = null;
    // Hapus sub-unit jika ada
    const sub = document.getElementById('f-subunit-group');
    if (sub) sub.remove();
  }
}

// ─── TAMPILKAN SUB-UNIT (DESA/SEKOLAH) SETELAH PILIH KECAMATAN
function showSubUnit() {
  const kec     = document.getElementById('f-unit').value;
  const data    = INSTANSI_DATA.kecamatan.units[kec] || [];

  // Hapus sub-unit lama
  const old = document.getElementById('f-subunit-group');
  if (old) old.remove();

  if (!kec || data.length === 0) return;

  // Buat group sub-unit baru
  const group = document.createElement('div');
  group.className = 'form-group';
  group.id        = 'f-subunit-group';
  group.innerHTML = `
    <label>Desa / Sekolah <span class="req">*</span></label>
    <select id="f-subunit">
      <option value="">— Pilih Desa / Sekolah —</option>
      ${data.map(u => `<option value="${u}">${u}</option>`).join('')}
    </select>`;

  // Sisipkan setelah f-unit-group
  const unitGroup = document.getElementById('f-unit-group');
  unitGroup.parentNode.insertBefore(group, unitGroup.nextSibling);
}

// Fungsi helper untuk ambil nama instansi lengkap saat submit
function getInstansiName() {
  const type = document.getElementById('f-inst-type').value;
  if (!type) return '';
  if (type === 'kecamatan') {
    const kec = document.getElementById('f-unit').value;
    const sub = document.getElementById('f-subunit');
    if (sub && sub.value) return sub.value + ' — ' + kec;
    return kec;
  }
  return document.getElementById('f-unit').value;
}

function getKecamatan() {
  const type = document.getElementById('f-inst-type').value;
  if (type === 'kecamatan') return document.getElementById('f-unit').value;
  return '';
}

// ─── LABEL UPLOAD ───────────────────────────────────────────
function updateUploadLabel() {
  const file = document.getElementById('f-file').files[0];
  if (file) {
    document.getElementById('upload-label').textContent = '✅ ' + file.name;
  }
}

// ─── VALIDASI & SUBMIT ──────────────────────────────────────
function submitForm() {
  const nama      = document.getElementById('f-nama').value.trim();
  const instType  = document.getElementById('f-inst-type').value;
  const instName  = getInstansiName();
  const jabatan   = document.getElementById('f-jabatan').value;
  const wa        = document.getElementById('f-wa').value.trim();
  const program   = document.getElementById('f-program').value.trim();
  const kegiatan  = document.getElementById('f-kegiatan').value.trim();
  const uraian    = document.getElementById('f-uraian').value.trim();

  if (!nama || !instType || !instName || !jabatan || !wa || !program || !kegiatan || !uraian) {
    alert('⚠️ Mohon lengkapi semua field yang wajib diisi (bertanda *).');
    return;
  }
  if (!/^628\d{8,12}$/.test(wa)) {
    alert('⚠️ Format WhatsApp tidak valid.\nGunakan format 628xxx, contoh: 6281234567890.');
    return;
  }

  const ticketNum = genTicketNumber();
  const newTicket = {
    id:                   't' + Date.now(),
    ticket_number:        ticketNum,
    submitter_name:       nama,
    submitter_username:   document.getElementById('f-username').value.trim() || nama.split(' ')[0],
    institution_type:     instType,
    institution_name:     instName,
    district:             getKecamatan(),
    position:             jabatan,
    whatsapp_number:      wa,
    email:                document.getElementById('f-email').value.trim(),
    program_name:         program,
    activity_name:        kegiatan,
    issue_description:    uraian,
    attachment_url:       null,
    status:               'submitted',
    assigned_auditor_id:  null,
    legal_basis:          null,
    auditor_recommendation: null,
    responded_at:         null,
    is_public_faq:        false,
    created_at:           new Date().toISOString()
  };

  const tickets = getTickets();
  tickets.push(newTicket);
  saveTickets(tickets);

  document.getElementById('modal-ticket-num').textContent = ticketNum;
  document.getElementById('success-modal').classList.add('open');
  clearForm();
  updateStats();
}

// ─── RESET FORM ─────────────────────────────────────────────
function clearForm() {
  ['f-nama','f-username','f-wa','f-email','f-program','f-kegiatan','f-uraian']
    .forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('f-inst-type').value = '';
  document.getElementById('f-jabatan').value   = '';
  document.getElementById('f-unit-group').style.display = 'none';
  document.getElementById('f-unit').innerHTML  = '<option value="">— Pilih Unit —</option>';
  const sub = document.getElementById('f-subunit-group');
  if (sub) sub.remove();
  document.getElementById('upload-label').textContent = 'Klik untuk upload DPA, RAB, atau draf SPJ';
}

// ─── TUTUP MODAL SUKSES ─────────────────────────────────────
function closeModal() {
  document.getElementById('success-modal').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('success-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
});
