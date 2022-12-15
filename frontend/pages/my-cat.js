function MyCat() {
    return (
      <main>
      <h2>ลงทะเบียนแมว</h2>
      <h6>ชื่อแมว : {loading ? 'loading...': cat[0].cat_name}</h6>
      <h6>สายพันธุ์ : {loading ? 'loading...': cat[0].breed}</h6>
      <h6>สี : {loading ? 'loading...': cat[0].color}</h6>
      <h6>อายุ (สัปดาห์) : {loading ? 'loading...': cat[0].age}</h6>
    </main>
    )
}
  
export default MyCat