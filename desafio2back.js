const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

let utilizadores = [];
let sessoes = [];

function generateToken(email) {
    return email
        .split("")
        .map((e, i) => String.fromCharCode(e.charCodeAt(0) + ((i % 4) + 1) * 2))
        .join("");
}

function validateEmail(email) {
    // Esta expressão regular não garante que email existe, nem que é válido
    // No entanto deverá funcionar para a maior parte dos emails que seja necessário validar.
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(email);
}

function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[~!@#$%^&*)(+=._-]/];
    return regexes
        .map((re) => re.test(password))
        .reduce((score, t) => (t ? score + 1 : score), 0);
}

function mensagensDeErro(email, password, confirmaPassword, checkTerms) {
    let erros = {};
    if (email === undefined || email === "") {
        erros.email = "Por favor introduza o seu endereço de email.";
    } else if (!validateEmail(email)) {
        erros.email = "Por favor introduza um endereço de email válido.";
    } else if (utilizadores.some((user) => user.email === email)) {
        erros.email = "O endereço introduzido já está registado.";
    }
    if (password === undefined || password === "") {
        erros.password = "Por favor introduza a sua password.";
    } else if (password.length < 8) {
        erros.password = "A sua password deve ter no mínimo 8 caracteres.";
    } else if (checkPasswordStrength(password) < 4) {
        erros.password =
            "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo";
    }
    if (confirmaPassword === undefined || confirmaPassword === "") {
        erros.passwordConfirmation =
            "Por favor introduza novamente a sua password.";
    } else if (confirmaPassword !== password) {
        erros.passwordConfirmation = "As passwords não coincidem.";
    }
    if (!checkTerms) {
        erros.acceptsTerms =
            "Tem de aceitar os termos e condições para criar a sua conta.";
    }
    return erros;
}

app.post("/signup", (req, res) => {
    const data = req.body;
    const erros = mensagensDeErro(
        data.email,
        data.password,
        data.passwordConfirmation,
        data.acceptsTerms,
        data.acceptsCommunications
    );
    if (Object.keys(erros).length === 0) {
        utilizadores.push(data);
        res.status(201).json({
            message: "Utilizador Criado com Sucesso!",
        });
    } else {
        res.status(400).json({
            message: "Os dados introduzidos não são válidos.",
            errors: erros,
        });
    }
});
app.post("/login", (req, res) => {
    const data = req.body;
    if (!utilizadores.some((user) => user.email === data.email)) {
        res.status(404).json({ message: "O utilizador não foi encontrado!" });
    } else if (
        utilizadores.find((user) => user.email === data.email).password !==
        data.password
    ) {
        res.status(401).json({ message: "A password introduzida é inválida!" });
    } else {
        const token = generateToken(data.email);
        sessoes.push(token);
        res.status(200).json({ token: token });
    }
});
app.get("/user", (req, res) => {
    const token = req.header("authorization");
    if (token === undefined || token === "") {
        res
            .status(401)
            .json({ message: "Não foi enviado o token de autenticação!" });
    } else if (!sessoes.some((sessao) => sessao === token)) {
        res
            .status(403)
            .json({ message: "Não existe nenhuma sessão com o token indicado!" });
    } else {
        const user = utilizadores.find((u) => generateToken(u.email) === token);
        res.status(200).json({
            email: user.email,
            acceptsTerms: user.acceptsTerms,
            acceptsCommunications: user.acceptsCommunications,
        });
    }
});
app.get("/user/:id", (req, res) => {
    const id = req.header("authorization");
    if (id === undefined || token === "") {
        res
            .status(401)
            .json({ message: "Não foi enviado o token de autenticação!" });
    } else if (!sessoes.some((sessao) => sessao === token)) {
        res
            .status(403)
            .json({ message: "Não existe nenhuma sessão com o token indicado!" });
    } else {
        const user = utilizadores.find((u) => generateToken(u.email) === token);
        res.status(200).json({
            email: user.email,
            acceptsTerms: user.acceptsTerms,
            acceptsCommunications: user.acceptsCommunications,
            sameUser: user.id == true || !user.id == false
        });
    }
});
app.listen(PORT, () => {
    console.log("rodando");
});