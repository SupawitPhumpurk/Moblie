import React, { useState } from 'react'; // นำเข้า React ป้องกันการแจ้งเตือน
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== เพิ่มฟังก์ชันคำนวณหนักๆ ไว้ตรงนี้ ==========
function expensiveInit() {
  console.log('คำนวณค่าเริ่มต้น... ควรเห็นครั้งเดียว()');
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;
  return sum;
}

// ========== ใบงาน ข้อ 7: Lazy Initial State ==========
const Ex7Screen = ({ navigation }) => {
  // ===== STATE =====
  // (1) ประกาศ state ชื่อ total โดยส่ง ฟังก์ชัน เป็นค่าเริ่มต้น เพื่อให้ init ทำงานครั้งเดียว
  const [total, setTotal] = useState(() => expensiveInit());

  // (2) ประกาศ state ชื่อ renders ชนิดตัวเลข เริ่มต้น 0 ไว้บังคับ (re-render)
  const [renders, setRenders] = useState(0);

  return (
    <View style={s.container}>
      <Text style={s.label}>ผลรวม 0..999999</Text>
      {/* (3) แสดงค่า total จัดรูปแบบด้วย (.toLocaleString()) */}
      <Text style={s.value}>{total.toLocaleString()}</Text>

      {/* (4) แสดงค่า renders */}
      <Text style={s.renderLabel}>จำนวนครั้งที่ re-render: {renders}</Text>
      
      {/* (5) กดปุ่มแล้วเพิ่ม renders ขึ้น 1 แบบ functional update (prev => prev + 1) */}
      <TouchableOpacity style={s.btn} onPress={() => setRenders(prev => prev + 1)}>
        <Text style={s.btnText}>บังคับ re-render</Text>
      </TouchableOpacity>

      <View style={s.note}>
        <Text style={s.noteText}>
          เปิด Console จะเห็น "คำนวณค่าเริ่มต้น" แค่ครั้งเดียว แม้กด re-render กี่ครั้ง
        </Text>
      </View>

      {/* ----------------- ปุ่มนำทางกลับที่เพิ่มเข้ามา ----------------- */}
      {/* สามารถเปลี่ยนจาก 'Ex1' เป็นชื่อหน้าอื่นใน Stack Navigator ของคุณได้เลยครับ */}
      <TouchableOpacity 
        style={[s.btn, s.ghost, { marginTop: 12 }]} 
        onPress={() => navigation.navigate('Ex8')}
      >
        <Text style={s.btnTextGhost}>ไปยัง (Ex8)</Text>
      </TouchableOpacity>
      {/* -------------------------------------------------------- */}
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    alignItems: 'center', 
    gap: 8 
  },
  label: { 
    color: '#8b949e', 
    fontSize: 15, 
    marginTop: 10 
  },
  value: { 
    color: '#61dafb', 
    fontSize: 40, 
    fontWeight: '800', 
    marginVertical: 6 
  },
  renderLabel: { 
    color: '#c9d1d9', 
    fontSize: 16, 
    marginTop: 14 
  },
  btn: { 
    backgroundColor: '#21262d', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 10, 
    marginTop: 6,
    width: '100%', // ปรับขนาดให้เต็มเพื่อความสวยงาม
    alignItems: 'center'
  },
  btnText: { 
    color: '#c9d1d9', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  note: { 
    marginTop: 16, 
    backgroundColor: '#161b22', 
    borderRadius: 10, 
    padding: 14, 
    borderWidth: 1, 
    borderColor: '#30363d',
    width: '100%'
  },
  noteText: { 
    color: '#8b949e', 
    fontSize: 14, 
    lineHeight: 21 
  },
  // สไตล์สำหรับปุ่มผี (Ghost) ที่เพิ่มเข้ามา
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1, 
    borderColor: '#30363d'
  },
  btnTextGhost: {
    color: '#8b949e', 
    fontSize: 16, 
    fontWeight: '600' 
  }
});

export default Ex7Screen;