import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// เพิ่มการนำเข้า StyleSheet, ScrollView, Switch และเพิ่มสไตล์ของปุ่มให้เรียบร้อย
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';

// ========== ใบงาน ข้อ 3: Toggle (boolean) ==========
// เพิ่ม { navigation } เข้ามาใน Props เพื่อใช้สลับหน้า
const Ex3Screen = ({ navigation }) => {
  // ===== STATE =====
  // (1) ประกาศ state ชื่อ isDark คุมโหมดมืด ค่าเริ่มต้น true
  const [isDark, setIsDark] = useState(true);

  // (2) ประกาศ state ชื่อ showSecret คุมการซ่อนแสดงคำตอบ ค่าเริ่มต้น false
  const [showSecret, setShowSecret] = useState(false);

  // (3) ตัวแปรช่วย bg: ถ้า isDark เป็นจริงใช้ '#0d1117' ไม่งั้น '#ffffff'
  const bg = isDark ? '#0d1117' : '#ffffff';
  
  // (4) ตัวแปรช่วย fg: ถ้า isDark เป็นจริงใช้ '#c9d1d9' ไม่งั้น '#111111'
  const fg = isDark ? '#c9d1d9' : '#111111';

  // ตัวแปรช่วยสำหรับสีปุ่มผี (Ghost Button) เพื่อให้มองเห็นได้ชัดทั้งในโหมดมืดและสว่าง
  const borderGhostColor = isDark ? '#30363d' : '#cccccc';
  const textGhostColor = isDark ? '#8b949e' : '#555555';

  return (
    <ScrollView contentContainerStyle={[s.container, { backgroundColor: bg }]}>
      <View style={s.row}>
        <Text style={[s.text, { color: fg }]}>โหมดมืด (Dark Mode)</Text>
        {/* (5) Switch: ผูก value กับ isDark และสลับค่า isDark เมื่อเปลี่ยน */}
        <Switch 
          value={isDark} 
          onValueChange={(value) => setIsDark(value)} 
        />
      </View>

      {/* (6) กดปุ่มแล้วสลับค่า showSecret จริง (<-> เท็จ) */}
      <TouchableOpacity style={s.btn} onPress={() => setShowSecret(!showSecret)}>
        <Text style={s.btnText}>{showSecret ? 'ซ่อนคำตอบ' : 'แสดงคำตอบ'}</Text>
      </TouchableOpacity>

      {/* (7) แสดง Text ด้านล่างนี้ เฉพาะเมื่อ showSecret เป็นจริง ใช้ (&&) */}
      {showSecret && (
        <Text style={[s.secret, { color: fg }]}>คำตอบของทุกสรรพสิ่งคือ 42</Text>
      )}

      {/* ----------------- ส่วนที่เพิ่มขึ้นมา ----------------- */}
      {/* ปุ่มไปยัง Ex4 (ปรับแต่งสีเส้นขอบและตัวหนังสือตามโหมด มืด/สว่าง อัตโนมัติ) */}
      <TouchableOpacity
        style={[s.btnGhost, { borderColor: borderGhostColor, marginTop: 20 }]}
        onPress={() => navigation.navigate('Ex4')}
      >
        <Text style={[s.btnTextGhost, { color: textGhostColor }]}>ไปยัง Ex4</Text>
      </TouchableOpacity>
      {/* -------------------------------------------------- */}
      
    </ScrollView>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    gap: 18, 
    flexGrow: 1 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  text: { 
    fontSize: 16 
  },
  btn: { 
    backgroundColor: '#238636', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  btnText: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  secret: { 
    fontSize: 18, 
    fontWeight: '700', 
    textAlign: 'center', 
    marginTop: 4 
  },
  // สไตล์เพิ่มเติมสำหรับปุ่ม ไปยัง Ex4
  btnGhost: {
    borderWidth: 1, 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  btnTextGhost: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
});

export default Ex3Screen;