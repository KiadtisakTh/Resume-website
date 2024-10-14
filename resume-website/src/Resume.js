import React from 'react';
import profileImage from './img/s.jpg'; // นำเข้ารูปภาพ

const Resume = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="sm:w-2/3">
            <h1 className="text-4xl font-bold text-blue-700">Kiadtsak Thonghai</h1>
            <h4 className="text-2xl text-blue-600">เกียรติศักดิ์ ทองให้</h4>
            <h5 className="text-lg font-semibold mt-4">MINI PROJECT</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>เว็บร้าน เอส & ฮาร์ท ซัค ริด - Django</li>
              <li>เว็บจัดการข้อมูลสัตว์ในสวนสัตว์ - Django</li>
            </ul>
            <h5 className="text-lg font-semibold mt-4">การติดต่อ</h5>
            <p>📞 : +66 62-425-7680</p>
            <p>✉️ : Kiadtsak.th.64@ubu.ac.th</p>
            <p>🌐 : <a href="https://github.com/KiadtsakTh" className="text-blue-500 underline">github.com/KiadtsakTh</a></p>
          </div>
          <div className="sm:w-1/3 flex justify-center mt-4 sm:mt-0">
            <img
              src={profileImage} // ใช้การนำเข้าภาพ
              alt="Kiadtsak Thonghai"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
        <h5 className="text-lg font-semibold mt-4">ภาษา</h5>
        <ul className="list-disc pl-5 mb-4">
          <li>ไทย</li>
          <li>อังกฤษ (พื้นฐาน)</li>
        </ul>
        <h5 className="text-lg font-semibold mt-4">ทักษะ / Skills</h5>
        <ul className="list-disc pl-5 mb-4">
          <li>Python (พื้นฐาน)</li>
          <li>HTML (พื้นฐาน)</li>
          <li>CSS (พื้นฐาน)</li>
        </ul>
        <h5 className="text-lg font-semibold mt-4">การศึกษา</h5>
        <ul className="list-disc pl-5 mb-4">
          <li>ลิขสิทธิ์ณญาณการชำระบาญ มหาวิทยาลัยตาดอบปลาย</li>
          <li>GPAX: 2.39</li>
          <li>มหาวิทยาลัยอุบลราชธานี</li>
          <li>GPAX: 2.25</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
  