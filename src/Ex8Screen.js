import React, { useState } from 'react'; // เติม React ป้องกัน Error
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 8: แยก vs รวม state ==========
const Ex8Screen = ({ navigation }) => {
  // ===== STATE =====
  // แบบแยก:
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // แบบรวม:
  const [status, setStatus] = useState({ loading: false, error: null, data: null });

  // (3) loadSeparate: สุ่มผลลัพธ์ 50/50 เหมือนเดิม
  const loadSeparate = () => {
    setLoading(true);
    setError(null);
    setData(null);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // สุ่ม 50/50 มีโอกาสพลาดได้
      setLoading(false);
      if (isSuccess) {
        setData('โหลดสำเร็จ! 🎉');
      } else {
        setError('เกิดข้อผิดพลาด! ❌');
      }
    }, 800);
  };

  // (4) loadCombined: แก้ไขใหม่ให้ โหลดสำเร็จ 100% แน่นอน
  const loadCombined = () => {
    setStatus({ loading: true, error: null, data: null });

    setTimeout(() => {
      // เอา Math.random() ออก และบังคับให้สำเร็จเสมอ
      const isSuccess = true; 
      
      if (isSuccess) {
        setStatus({ loading: false, error: null, data: 'โหลดสำเร็จ! 🎉' });
      } else {
        setStatus({ loading: false, error: 'เกิดข้อผิดพลาด! ❌', data: null });
      }
    }, 800);
  };

  // ฟังก์ชันช่วยจัดข้อความแสดงผล
  const getRenderText = (isLoading, isError, isData) => {
    if (isLoading) return 'กำลังโหลดข้อมูล...';
    if (isError) return isError;
    if (isData) return isData;
    return 'ยังไม่โหลด';
  };

  return (
    <View style={s.container}>
      {/* ฝั่งแบบแยก State (มีสุ่มสำเร็จ/ล้มเหลว) */}
      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบแยก (3 state)</Text>
        <Text style={s.result}>
          {getRenderText(loading, error, data)}
        </Text>
        <TouchableOpacity style={s.btn} onPress={loadSeparate}>
          <Text style={s.btnText}>โหลดข้อมูล (สุ่มผล)</Text>
        </TouchableOpacity>
      </View>

      {/* ฝั่งแบบรวม State (สำเร็จแน่นอน 100%) */}
      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบรวม (1 object)</Text>
        <Text style={s.result}>
          {getRenderText(status.loading, status.error, status.data)}
        </Text>
        <TouchableOpacity style={s.btn} onPress={loadCombined}>
          <Text style={s.btnText}>โหลดข้อมูล (ได้ชัวร์)</Text>
        </TouchableOpacity>
      </View>

      {/* ----------------- ปุ่มกลับไปหน้า Ex1 ----------------- */}
      <TouchableOpacity 
        style={[s.btnGhost, { marginTop: 10 }]} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={s.btnTextGhost}>กลับไปหน้า(Home)</Text>
      </TouchableOpacity>
      {/* -------------------------------------------------------- */}
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    gap: 14 
  },
  panel: { 
    backgroundColor: '#161b22', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    borderRadius: 12, 
    padding: 16, 
    gap: 10 
  },
  panelTitle: { 
    color: '#61dafb', 
    fontSize: 15, 
    fontWeight: '700' 
  },
  result: { 
    color: '#c9d1d9', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  btn: { 
    backgroundColor: '#238636', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  btnText: { 
    color: '#ffffff', 
    fontSize: 15, 
    fontWeight: '600' 
  },
  btnGhost: {
    backgroundColor: 'transparent',
    borderWidth: 1, 
    borderColor: '#30363d',
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextGhost: {
    color: '#8b949e', 
    fontSize: 15, 
    fontWeight: '600' 
  }
});

export default Ex8Screen;