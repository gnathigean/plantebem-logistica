// auth.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';

// ⚠️ COLOQUE AQUI SUAS CREDENCIAIS DO FIREBASE ⚠️
const firebaseConfig = {
    apiKey: "AIzaSyD8GjaS3tuDpSvBl2-bpa-QXIKTqq80Mn4",
    authDomain: "login-com-dados.firebaseapp.com",
    projectId: "login-com-dados",
    storageBucket: "login-com-dados.firebasestorage.app",
    messagingSenderId: "75556023458",
    appId: "1:75556023458:web:9f1362d0597603c0f37bfb",
    measurementId: "G-W9LRT99579"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const LOGIN_URL = 'index.html'; // Ajuste o nome do arquivo de login

// Função para fazer logout
async function handleLogout() {
    try {
        await signOut(auth);
        alert("Sessão encerrada com sucesso! Redirecionando para o login.");
        window.location.href = LOGIN_URL;
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        alert("Não foi possível sair da sessão. Tente novamente.");
    }
}

// NOVO: Adiciona o listener de logout quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        // O botão agora anexa o evento via JavaScript, e não via onclick no HTML
        logoutButton.addEventListener('click', handleLogout);
    } else {
        console.warn("Botão de logout não encontrado no DOM.");
    }
});