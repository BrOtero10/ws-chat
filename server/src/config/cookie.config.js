const cookieConfig = {
    secret: process.env.COOKIE_SECRET || "fallback_secret", // Segredo vindo de variável de ambiente
    saveUninitialized: false, // Não salva sessões não inicializadas
    resave: false, // Evita salvar sessões sem alterações
    cookie: {
      maxAge: 12 * 60 * 60 * 1000, // 12 horas
      secure: process.env.NODE_ENV === "production", // Somente HTTPS em produção
      httpOnly: true, // Bloqueia acesso ao cookie via JavaScript
      sameSite: "Strict", // Protege contra CSRF
    },
};

module.exports = cookieConfig