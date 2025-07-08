export default function handler(req, res) {
  const secretLink = "https://link.clashroyale.com/invite/clan/it?tag=P2UQP9CJ&token=k9pkpagg&platform=iOS";

  const ref = req.headers.referer || "";
  if (!ref.includes("Donche97.github.io")) {
    return res.status(403).json({ error: "Accesso non autorizzato." });
  }

  const ua = req.headers['user-agent'] || "";
  if (ua.includes("bot") || ua.includes("curl") || ua.includes("python")) {
    return res.status(403).json({ error: "Bot bloccato." });
  }

  setTimeout(() => {
    res.status(200).json({ url: secretLink });
  }, 1000);
}
