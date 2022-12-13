export default function List(){
    return(
        <div class="container mx-auto h-[87vh] flex justify-center">
            <div class="grid h-96 my-auto text-iris list-disc">
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="/all-cat">ค้นหาแมว</a></li>
            <li><a href="/signin/cat/1">ดูรายละเอียดแมวโดยคนที่ยังไม่เข้าสู่ระบบ</a></li>
            <li><a href="/signin/user">สมัครสมาชิกผู้อุปการะ</a></li>
            <li><a href="/signin/shelter">สมัครสมาชิกมูลนิธิ</a></li>
            <li><a href="/shelter/shelter-form">อัพเดทข้อมูลมูลนิธิ</a></li>
            <li><a href="/shelter/add-cat">เพิ่มแมวโดยมูลนิธิ</a></li>
            <li><a href="/shelter/my-cat">แมวของมูลนิธิ</a></li>
            <li><a href="/shelter/cat/1">อัพเดทสถานะแมวโดยมูลนิธิ</a></li>
            <li><a href="/user/cat/1">ดูรายละเอียดแมวและคิวของแมวโดยผู้ใช้</a></li>
            <li><a href="/user/queue">จองคิวแมวโดยผู้ใช้</a></li>
            <li><a href="/user/my-cat">ดูแมวที่จองคิวไว้ของผู้ใช้</a></li>
            </div>
        </div>
    )
}