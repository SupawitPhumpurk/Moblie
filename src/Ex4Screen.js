import React, { useState } from 'react'; // เติม React เผื่อไว้ป้องกันการแจ้งเตือน
// เพิ่ม TouchableOpacity เข้ามาในรายการ import ด้านล่างนี้
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// ========== ใบงาน ข้อ 4: Profile Form (object) ==========
// แก้ไข: ใส่เครื่องหมาย { } ครอบ navigation
const Ex4Screen = ({ navigation }) => {
  // ===== STATE =====
  const [form, setForm] = useState({ firstName: '', lastName: '', age: '' });

  // (2) ฟังก์ชัน updateField(key, value)
  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={s.container}>
      <Field 
        label="ชื่อ" 
        value={form.firstName} 
        onChangeText={(val) => updateField('firstName', val)} 
      />
      <Field 
        label="นามสกุล" 
        value={form.lastName} 
        onChangeText={(val) => updateField('lastName', val)} 
      />
      <Field 
        label="อายุ" 
        value={form.age} 
        keyboardType="numeric" 
        onChangeText={(val) => updateField('age', val)} 
      />

      <View style={s.preview}>
        <Text style={s.previewLabel}>ตัวอย่างข้อมูล</Text>
        <Text style={s.previewText}>
          {form.firstName || '...'} {form.lastName || '...'}
        </Text>
        <Text style={s.previewMeta}>
          อายุ: {form.age || '-'} ปี
        </Text>

        {/* ----------------- ปุ่มไปยัง Ex5 ที่เพิ่มเข้ามา ----------------- */}
        <TouchableOpacity
          style={[s.btn, s.ghost]}
          onPress={() => navigation.navigate('Ex5')}
        >
          <Text style={s.btnTextGhost}>ไปยัง Ex5</Text>
        </TouchableOpacity>
        {/* -------------------------------------------------------- */}
      </View>
    </View>
  );
}

function Field({ label, ...props }) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={s.label}>{label}</Text>
      <TextInput style={s.input} placeholderTextColor="#6e7681" {...props} />
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    gap: 14 
  },
  label: { 
    color: '#8b949e', 
    fontSize: 14 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#30363d', 
    backgroundColor: '#161b22', 
    color: '#c9d1d9', 
    padding: 12, 
    borderRadius: 10, 
    fontSize: 16 
  },
  preview: { 
    marginTop: 10, 
    backgroundColor: '#161b22', 
    borderRadius: 10, 
    padding: 16, 
    borderWidth: 1, 
    borderColor: '#30363d',
    gap: 12 // เพิ่ม gap ให้ของข้างในมีระยะห่างที่สวยงาม
  },
  previewLabel: { 
    color: '#8b949e', 
    fontSize: 13, 
    marginBottom: 6 
  },
  previewText: { 
    color: '#61dafb', 
    fontSize: 20, 
    fontWeight: '700' 
  },
  previewMeta: { 
    color: '#c9d1d9', 
    fontSize: 15, 
    marginTop: 4,
    marginBottom: 8 // เว้นระยะห่างก่อนถึงปุ่ม
  },
  // เพิ่มสไตล์สำหรับปุ่มข้ามหน้า
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

export default Ex4Screen;