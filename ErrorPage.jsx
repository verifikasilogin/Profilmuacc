import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, AlertTriangle } from 'lucide-react';
const ErrorPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);
  const handleLogout = () => {
    toast({
      title: "Berhasil Keluar",
      description: "Anda telah berhasil keluar dari perangkat lain. Silakan coba login kembali."
    });
    navigate('/');
  };
  return <>
      <Helmet>
        <title>Login Error - Mitra Bukalapak</title>
        <meta name="description" content="Terjadi masalah saat login ke akun Mitra Bukalapak." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-8">
            <img src="https://horizons-cdn.hostinger.com/d6c60f8a-60ec-4c69-abb8-e8ce52da2afb/36526-Pl5SA.jpg" alt="Mitra Bukalapak Logo" className="h-12 w-auto" />
          </div>
          
          <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 text-center">
            <AnimatePresence mode="wait">
              {isLoading ? <motion.div key="loader" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.3
            }} className="flex flex-col items-center justify-center space-y-4 h-64">
                  <Loader2 className="h-12 w-12 text-red-600 animate-spin" />
                  <p className="text-gray-600 font-medium">Memuat...</p>
                </motion.div> : <motion.div key="error" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.4
            }} className="flex flex-col items-center space-y-4">
                  <AlertTriangle className="h-16 w-16 text-yellow-500" />
                  <h1 className="text-xl font-bold text-gray-900">Akunmu sedang ter-login di perangkat atau aplikasi di waktu yang sama </h1>
                  <p className="text-sm text-gray-600 max-w-xs">Untuk bisa lanjut, kamu harus mengeluarkan akunmu dari perangkat/aplikasi yang sedang digunakan login saat ini. </p>
                  <div className="w-full space-y-4 pt-4">
                    <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200">Logout & Lanjutkan</Button>
                    <button type="button" className="text-sm text-red-600 hover:text-red-500 font-medium" onClick={() => toast({
                  description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
                })}>
                      Butuh Bantuan?
                    </button>
                  </div>
                </motion.div>}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>;
};
export default ErrorPage;