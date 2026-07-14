import React, { useState } from 'react'; // แก้ไขตัวสะกด React
// เพิ่ม TouchableOpacity ในบรรทัดนี้
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { StatusBar } from 'expo-status-bar';

// ========== ใบงาน ข้อ 2: Name Input (string) ==========
const Ex2Screen = ({ navigation }) =>{
  // ===== STATE =====
  const [name, setName] = useState('');

  return (
    <View style={s.container}>
      <Text style={s.label}>ชื่อของคุณ</Text>
      <TextInput
        style={s.input}
        placeholder="พิมพ์ชื่อที่นี่..."
        placeholderTextColor="#6e7681"
        value={name} 
        onChangeText={(text) => setName(text)} 
      />
      <View style={s.preview}>
        <Text style={s.greet}>
          สวัสดี {name.trim() === '' ? '...' : name} ครับ
        </Text>
        <Text style={s.meta}>
          จำนวนตัวอักษร: {name.length}
        </Text>
        
        {/* ปุ่มไปยัง Ex3 */}
        <TouchableOpacity
          style={[s.btn, s.ghost]}
          onPress={() => navigation.navigate('Ex3')}
        >
          <Text style={s.btnTextGhost}>ไปยัง Ex3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    gap: 8 
  },
  label: { 
    color: '#8b949e', 
    fontSize: 14, 
    marginBottom: 4 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#30363d', 
    backgroundColor: '#161b22', 
    color: '#c9d1d9', 
    padding: 14, 
    borderRadius: 10, 
    fontSize: 16 
  },
  preview: { 
    marginTop: 16, 
    backgroundColor: '#161b22', 
    borderRadius: 10, 
    padding: 16, 
    borderWidth: 1, 
    borderColor: '#30363d',
    gap: 12 // เพิ่ม gap เพื่อให้ปุ่มและข้อความไม่ติดกันเกินไป
  },
  greet: { 
    color: '#61dafb', 
    fontSize: 20, 
    fontWeight: '700' 
  },
  meta: { 
    color: '#8b949e', 
    fontSize: 14, 
    marginTop: 6,
    marginBottom: 10 // เว้นระยะห่างด้านล่างก่อนถึงปุ่ม
  },
  // เพิ่ม Style สำหรับปุ่มที่ขาดหายไปจากโค้ดเดิม
  btn: { 
    backgroundColor: '#21262d', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  ghost: { 
    backgroundColor: 'transparent' 
  },
  btnTextGhost: { 
    color: '#8b949e', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});

export default Ex2Screen;