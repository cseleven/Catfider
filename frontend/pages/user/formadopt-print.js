import { useEffect, useState } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
    THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew-Bold.ttf',
        italics: 'THSarabunNew-Italic.ttf',
        bolditalics: 'THSarabunNew-BoldItalic.ttf'
    },
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
    }
}

export default function PrintAdopt() {

    const fetchExample = async () => {
        try {
            setLoading(true)
            let response = await fetch("/api/getexample");
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
            setTopic(data);
        } finally {
            setLoading(false);
        }
    };

    const postExample = async (event) => {
        var raw = JSON.stringify(input);

        var myheader = {
            'Content-Type': 'application/json'
        };


        var requestOptions = {
            method: 'POST',
            headers: myheader,
            body: raw,
            redirect: 'follow'
        };

        try {
            setLoading(true);
            let response = await fetch("/api/postexample", requestOptions);
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }
    };

    const updateInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const createPdf = () => {
        console.log("createPDF")

        var docDefinition = {
            content: [
                {
                    text: 'แบบฟอร์มขอรับอุปการะแมว',
                    bold: 'true',
                    fontSize: 18,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                },

                {
                    text: 'บันทึกนี้เป็นข้อตกลงการขอรับอุปการะแมวระหว่างผู้ขอรับอุปการะกับทางมูลนิธิผ่านแพลตฟอร์ม Cat finder เท่านั้น',
                    bold: 'true',
                    fontSize: 14,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },

                {
                    text:
                        'ตอนที่ 1 ข้อมูลผู้รับอุปการะ',
                    bold: 'true',
                    fontSize: 14,
                    width: 'auto',
                    margin: [0, 0, 0, 0]

                },

                {
                    text:
                        'ตอนที่ 1.1 ข้อมูลส่วนตัว',
                    width: 'auto',

                },
                {
                    text:
                        'ชื่อ: ' +
                        'คำนำหน้า: ' +
                        'ชื่อจริง: ' +
                        'นามสกุล: ' +
                        'ชื่อเล่น: ' +
                        'อายุ: ',
                    width: 'auto',

                },

                {
                    text:
                        'เลขที่ตามบัตรประจำตัวประชาชน: ' +
                        'เพศ: ',
                    width: 'auto',

                },
                // ที่อยู่ กับ อาศัยอยู่กับ
                {
                    text:
                        'ที่อยู่อาศัยปัจจุบัน: ' +
                        'อาศัยอยู่กับ: ' +
                        'จำนวนสมาชิก(รวมตัวเอง): ' +
                        'สมาชิกในครอบครัว: ',
                    width: 'auto',

                },
                // รายละเอียดที่อยู่
                {
                    text:
                        'รายละเอียดที่อยู่: ' +
                        'บ้านเลขที่: ' +
                        'หมู่: ' +
                        'หมู่บ้าน/อาคาร: ' +
                        'ชั้น: ' +
                        'เลขที่ห้อง: ' +
                        'ซอย: ' +
                        'ถนน: ' +
                        'แขวง/ตำบล: ' +
                        'เขต/อำเภอ: ' +
                        'จังหวัด: ' +
                        'รหัสไปรษณีย์: ',
                    width: 'auto',
                },
                {
                    text:
                        'ตอนที่ 1.2 ข้อมูลที่อยู่ที่จะนำแมวไปเลี้ยง',
                    width: 'auto',

                },

                {
                    text:
                        'ตอนที่ 1.3 ข้อมูลติดต่อ',
                    width: 'auto',

                },
                {
                    text:
                        'เบอร์มือถือ: ' +
                        'เบอร์ที่บ้าน: ' +
                        'เบอร์ที่ทำงาน: ',
                    width: 'auto',
                },
                {
                    text:
                        'Facebook user: ' +
                        'Line ID: ',
                    width: 'auto',
                },
                {
                    text:
                        'บุคคลอื่นที่สามารถติดต่อได้: ' +
                        'ชื่อและนามสกุล: ' +
                        'เกี่ยวข้องเป็น: ' +
                        'เบอร์มือถือ: ',
                    width: 'auto',
                },

                {
                    text:
                        'ตอนที่ 1.4 ข้อมูลการทำงาน',
                    width: 'auto',

                },
                {
                    text:
                        'อาชีพปัจจุบัน: ',
                    width: 'auto',
                },
                {
                    text:
                        'ข้อมูลบริษัทเบื้องต้น: ' +
                        'ชื่อบริษัท: ' +
                        'ธุรกิจเกี่ยวข้องกับ: ' +
                        'ตำแหน่ง: ' +
                        'เงินเดือนประจำ(): ',
                    width: 'auto',
                    margin: [0, 0, 0, 8]
                },

                {
                    text:
                        'ตอนที่ 2 ข้อมูลการเลี้ยงแมว',
                    bold: 'true',
                    fontSize: 14,
                    width: 'auto',
                    margin: [0, 0, 0, 0]

                },
                {
                    text:
                        'ประวัติการเลี้ยงแมว: ' +
                        'จำนวนแมว: ' +
                        'สายพันธุ์: ',
                    width: 'auto',

                },
                {
                    text:
                        'มีสัตว์เลี้ยงชนิดอื่น: ' +
                        'จำนวน: ' +
                        'ชนิดสัตว์: ',
                    width: 'auto',

                },
                {
                    text:
                        'การเลี้ยงแมวปัจจุบัน: ',
                    width: 'auto',
                    margin: [0, 0, 0, 8]

                },
                {
                    text:
                        'ตอนที่ 3 รับอุปการะ และส่งมอบ',
                    bold: 'true',
                    fontSize: 14,
                    width: 'auto',
                    margin: [0, 0, 0, 0]

                },
                {
                    text:
                        'ข้าพเจ้าฯ ขอรับรองว่าจะเลี้ยงดูแมวที่รับอุปการะ  ' +
                        'รหัสแมว: ' +
                        'ชื่อใหม่: ',
                    width: 'auto',

                },
                {
                    text:
                        'ด้วยความรัก ความมตตา ความเอาใจใส่เป็นอย่างตี รมทั้งใช้ความระมัดระวัง ดูแลป้องกัน รับผิดชอบความเสียหายที่จะเกิดขึ้นจากแมวเป็นผู้กระทำตามวิสัย' +
                        'ที่บุคคลทั่วไปพีงปฏิบัติ จะพาไปรักษาหากเกิดการเจ็บไช้ได้ป่วย ตลอดจนรับผิดชอบชีวิตของแมวจนสุดกำลัง  จะไม่นำแมวที่รับอุปการะนี้ไปเพื่อแสวงหาผลประโยชน์ทางการค้า การขยายพันธุ์เพื่อจำหน่าย หรือกระทำการอื่นใดอันเป็นการผิดวัตถุประสงค์ของการรับอุปการะ และพร้อมที่จะให้มีการตรวจสอบได้ตลอดเวลา' +
                        'และจะไม่นำแมวไปปล่อยทิ้งให้เป็นแมวจร หากแต่จะส่งมอบให้กับบุคคลอื่นนำไปอุปการะต่อ จะต้องได้รับการพิจารณาและยินยอมจากผู้ส่งมอบก่อนบันทึกช้อตกลงฉบับนี้ ข้พเจ้าได้อำนทำความเข้าใจข้อความในสัญญา เห็นถูกต้องตามความประสงค์ และขอยืนยันในสิ่งที่ข้าพเจ้าได้กรอกข้อมูล และตอบแบบสอบถามข้างตันนี้เป็นความจริงทุกประการ',
                    width: '*',

                },



            ],
            defaultStyle: {
                font: 'THSarabunNew',
                margin: [0, 0, 0, 8]
            }
        };
        pdfMake.createPdf(docDefinition).open()

    }

    /**/

    // render() {
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo" />
    //                 <h1 className="App-title">Welcome to React</h1>
    //             </header>
    //             <p className="App-intro">
    //                 To get started, edit <code>src/App.js</code> and save to reload.
    //             </p>
    //             <input type="button" value="print PDF" onClick={this.printPDF} />
    //         </div>
    //     );
    // }
}

