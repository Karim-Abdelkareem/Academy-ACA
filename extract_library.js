const fs = require("fs");
const data = require("./data/menu.json");

function findMaktaba(obj) {
  if (!obj || typeof obj !== "object") return null;
  if (obj.label === "المكتبة" || obj.name === "المكتبة") return obj;
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      let res = findMaktaba(obj[k]);
      if (res) return res;
    }
  }
}

const maktaba = findMaktaba(data.data);
if (maktaba && maktaba.items) {
  const libraryData = maktaba.items.map((item) => {
    let desc = "لا يوجد وصف متاح";
    if (item.richContent) {
      // Decode known HTML entities quickly
      let rawText = item.richContent
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim();
      if (rawText) desc = rawText;
    }

    return {
      "paper id": item.id,
      header: item.name,
      date: item.date1String || "01/2026",
      description: desc,
      image: item.image || "/assets/images/Default.png",
      dropdowncontent: [
        { label: "قراءة التقرير", url: item.targetUrl || "#" },
        { label: "تحميل PDF", url: item.audioURL || "#" },
      ],
    };
  });

  fs.writeFileSync(
    "./data/library.json",
    JSON.stringify({ library: libraryData }, null, 2),
    "utf-8",
  );
  console.log(
    "Successfully created library.json with " + libraryData.length + " items.",
  );
} else {
  console.log("Could not find المكتبة in menu.json");
}
