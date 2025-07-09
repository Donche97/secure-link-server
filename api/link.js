export default function handler(req, res) {
  const links = {
    1: "https://link.clashroyale.com/invite/clan/it?tag=P2UQP9CJ&token=k9pkpagg&platform=iOS", // Armata Rozza
    2: "https://example.com/ce-magnamm", // CE MAGNAMM
    3: "https://example.com/dog-rider",   // Dog Rider
    4: "https://example.com/tori-feroci", // Tori Feroci
  };

  const id = req.query.id;
  const url = links[id];

  if (!url) {
    return res.status(400).json({ error: "Link non trovato." });
  }

  res.status(200).json({ url });
}
