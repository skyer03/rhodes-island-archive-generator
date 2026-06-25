const EXPORT_WIDTH = 1080;
const EXPORT_HEIGHT = 1600;
const LOGO_SRC = "data:image/png;base64,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";
const REDACTION_BLOCKS = 8;

const state = {
  avatarImage: "",
  showcaseImage: "",
  gender: "未填写",
  height: "",
  weight: "",
  ipAddress: "",
  intro: "",
  favoriteOperator: "",
  recruitmentExpectation: "",
};

const fields = {
  avatarInput: document.querySelector("#avatarInput"),
  showcaseInput: document.querySelector("#showcaseInput"),
  gender: document.querySelector("#gender"),
  height: document.querySelector("#height"),
  weight: document.querySelector("#weight"),
  ipAddress: document.querySelector("#ipAddress"),
  intro: document.querySelector("#intro"),
  favoriteOperator: document.querySelector("#favoriteOperator"),
  recruitmentExpectation: document.querySelector("#recruitmentExpectation"),
};

const preview = {
  avatar: document.querySelector("#avatarPreview"),
  avatarBox: document.querySelector(".avatar-box"),
  showcase: document.querySelector("#showcasePreview"),
  showcaseBox: document.querySelector(".showcase-box"),
  gender: document.querySelector("#genderPreview"),
  height: document.querySelector("#heightPreview"),
  weight: document.querySelector("#weightPreview"),
  ip: document.querySelector("#ipPreview"),
  intro: document.querySelector("#introPreview"),
  favorite: document.querySelector("#favoritePreview"),
  expectation: document.querySelector("#expectationPreview"),
};

const counters = {
  intro: document.querySelector("#introCount"),
  favoriteOperator: document.querySelector("#favoriteCount"),
  recruitmentExpectation: document.querySelector("#expectationCount"),
};

["gender", "height", "weight", "ipAddress", "intro", "favoriteOperator", "recruitmentExpectation"].forEach((id) => {
  fields[id].addEventListener("input", () => {
    state[id] = fields[id].value.trim();
    render();
  });
});

fields.avatarInput.addEventListener("change", () => loadImageFile(fields.avatarInput, "avatarImage"));
fields.showcaseInput.addEventListener("change", () => loadImageFile(fields.showcaseInput, "showcaseImage"));

document.querySelector("#clearImagesButton").addEventListener("click", () => {
  state.avatarImage = "";
  state.showcaseImage = "";
  fields.avatarInput.value = "";
  fields.showcaseInput.value = "";
  render();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  Object.assign(state, {
    avatarImage: "",
    showcaseImage: "",
    gender: "未填写",
    height: "",
    weight: "",
    ipAddress: "",
    intro: "",
    favoriteOperator: "",
    recruitmentExpectation: "",
  });

  Object.entries(fields).forEach(([id, field]) => {
    field.value = field.type === "file" ? "" : id === "gender" ? "未填写" : "";
  });

  render();
});

document.querySelector("#downloadButton").addEventListener("click", async () => {
  try {
    const canvas = await createArchiveCanvas();
    const link = document.createElement("a");
    link.download = `罗德岛人事档案-${formatDate(new Date())}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error(error);
    alert("导出失败，请更换图片后重试，或用浏览器打开本页再导出。");
  }
});

function loadImageFile(input, key) {
  const file = input.files && input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state[key] = String(reader.result || "");
    render();
  });
  reader.readAsDataURL(file);
}

function render() {
  setImage(preview.avatar, preview.avatarBox, state.avatarImage);
  setImage(preview.showcase, preview.showcaseBox, state.showcaseImage);

  preview.gender.textContent = state.gender || "未填写";
  preview.ip.textContent = state.ipAddress || "未登记 IP";
  setMaybeRedacted(preview.height, state.height);
  setMaybeRedacted(preview.weight, state.weight);
  preview.intro.textContent = state.intro || "暂无自我介绍。";
  preview.favorite.textContent = state.favoriteOperator || "暂未填写";
  preview.expectation.textContent = state.recruitmentExpectation || "暂未填写招聘对象期望。";

  counters.intro.textContent = `${state.intro.length}/120`;
  counters.favoriteOperator.textContent = `${state.favoriteOperator.length}/40`;
  counters.recruitmentExpectation.textContent = `${state.recruitmentExpectation.length}/90`;
}

function setImage(img, box, source) {
  if (source) {
    img.src = source;
    box.classList.add("has-image");
  } else {
    img.removeAttribute("src");
    box.classList.remove("has-image");
  }
}

function setMaybeRedacted(element, value) {
  element.classList.toggle("redacted", !value);
  if (value) {
    element.textContent = value;
    return;
  }

  element.textContent = "";
  Array.from({ length: REDACTION_BLOCKS }).forEach(() => {
    element.appendChild(document.createElement("span"));
  });
}

async function createArchiveCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = EXPORT_WIDTH;
  canvas.height = EXPORT_HEIGHT;
  const ctx = canvas.getContext("2d");

  drawBackground(ctx);
  await drawHeader(ctx);
  await drawMainBlock(ctx);
  drawTextSections(ctx);
  await drawShowcase(ctx);
  drawFooter(ctx);

  return canvas;
}

function drawBackground(ctx) {
  ctx.fillStyle = "#f8fafb";
  ctx.fillRect(0, 0, EXPORT_WIDTH, EXPORT_HEIGHT);

  ctx.strokeStyle = "rgba(7,9,12,0.06)";
  ctx.lineWidth = 2;
  for (let y = 0; y < EXPORT_HEIGHT; y += 68) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(EXPORT_WIDTH, y);
    ctx.stroke();
  }

  drawPolygon(ctx, [[58, 58], [420, 58], [372, 136], [58, 136]], "#07090c");
  drawPolygon(ctx, [[680, 58], [1022, 58], [1022, 190], [606, 190]], "#e5eef3");

  ctx.fillStyle = "#f2c94c";
  ctx.fillRect(832, 92, 170, 52);
  ctx.fillStyle = "rgba(85,199,238,0.2)";
  ctx.fillRect(984, 0, 12, EXPORT_HEIGHT);

  ctx.fillStyle = "rgba(7,9,12,0.045)";
  ctx.font = "900 92px Arial";
  ctx.save();
  ctx.translate(1016, 216);
  ctx.rotate(Math.PI / 2);
  ctx.fillText("PROFILE", 0, 0);
  ctx.restore();

  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 24;
  ctx.strokeRect(12, 12, EXPORT_WIDTH - 24, EXPORT_HEIGHT - 24);
  ctx.strokeStyle = "#55c7ee";
  ctx.lineWidth = 4;
  ctx.strokeRect(44, 44, EXPORT_WIDTH - 88, EXPORT_HEIGHT - 88);
}

async function drawHeader(ctx) {
  try {
    const logo = await loadCanvasImage(LOGO_SRC);
    drawContainImage(ctx, logo, 72, 82, 132, 132);
  } catch {
    ctx.fillStyle = "#07090c";
    ctx.fillRect(72, 82, 132, 132);
    ctx.fillStyle = "#fff";
    ctx.font = "900 28px Arial";
    ctx.fillText("RI", 122, 154);
  }

  ctx.fillStyle = "#55c7ee";
  ctx.font = "900 28px Arial";
  ctx.fillText("RHODES ISLAND :// PROFILE", 238, 112);

  ctx.fillStyle = "#07090c";
  ctx.font = "900 58px Microsoft YaHei, Arial";
  ctx.fillText("人事档案", 238, 178);

  ctx.fillStyle = "#07090c";
  ctx.font = "900 26px Arial";
  ctx.fillText("NO.1096", 858, 126);

  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(238, 230);
  ctx.lineTo(1008, 230);
  ctx.stroke();
}

async function drawMainBlock(ctx) {
  const avatarRect = { x: 72, y: 280, w: 250, h: 250 };
  await drawImageBox(ctx, state.avatarImage, avatarRect, "OPERATOR\nPHOTO", "#e4ebef", "#07090c", false);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(356, 280, 652, 250);
  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 5;
  ctx.strokeRect(356, 280, 652, 250);

  ctx.fillStyle = "#07090c";
  ctx.font = "900 62px Arial";
  ctx.fillText("ID:", 390, 338);

  ctx.fillStyle = "#657782";
  ctx.font = "900 26px Arial";
  ctx.fillText("IP:", 390, 390);
  ctx.fillStyle = "#07090c";
  ctx.font = fitFont(ctx, state.ipAddress || "未登记 IP", 480, 34, "Microsoft YaHei, Arial");
  drawWrappedText(ctx, state.ipAddress || "未登记 IP", 438, 390, 480, 42, 1.15);

  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(390, 420);
  ctx.lineTo(966, 420);
  ctx.stroke();

  drawInfoRow(ctx, "GENDER", state.gender || "未填写", 390, 462, false, false);
  drawInfoRow(ctx, "HEIGHT", state.height, 390, 508, true, false);
  drawInfoRow(ctx, "WEIGHT", state.weight, 390, 554, true, false);
}

function drawInfoRow(ctx, label, value, x, y, redactWhenEmpty, dark) {
  ctx.fillStyle = dark ? "#8aa7b3" : "#657782";
  ctx.font = "900 22px Arial";
  ctx.fillText(label, x, y);

  ctx.strokeStyle = dark ? "rgba(85,199,238,0.24)" : "#d7e0e5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y + 22);
  ctx.lineTo(x + 500, y + 22);
  ctx.stroke();

  if (redactWhenEmpty && !value) {
    drawRedactionBlocks(ctx, x + 170, y - 22, 8, 22, 8, dark ? "#ffffff" : "#07090c");
    return;
  }

  ctx.fillStyle = dark ? "#ffffff" : "#07090c";
  ctx.font = "900 32px Microsoft YaHei, Arial";
  ctx.fillText(value || "未填写", x + 170, y);
}

function drawTextSections(ctx) {
  drawSection(ctx, 72, 580, 936, 352, "SELF INTRODUCTION", state.intro || "暂无自我介绍。", 36);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(72, 970, 414, 238);
  ctx.fillRect(526, 970, 482, 238);
  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 5;
  ctx.strokeRect(72, 970, 414, 238);
  ctx.strokeRect(526, 970, 482, 238);

  ctx.fillStyle = "#55c7ee";
  ctx.font = "900 24px Arial";
  ctx.fillText("PRIMARY OPERATOR", 104, 1024);
  ctx.fillText("RECRUITMENT TARGET", 558, 1024);

  ctx.fillStyle = "#07090c";
  ctx.font = fitFont(ctx, state.favoriteOperator || "暂未填写", 330, 48, "Microsoft YaHei, Arial");
  drawWrappedText(ctx, state.favoriteOperator || "暂未填写", 104, 1090, 330, 90, 1.25);

  ctx.fillStyle = "#15191d";
  ctx.font = "32px Microsoft YaHei, Arial";
  drawWrappedText(ctx, state.recruitmentExpectation || "暂未填写招聘对象期望。", 558, 1086, 390, 110, 1.45);
}

function drawSection(ctx, x, y, w, h, label, text, fontSize) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = "#55c7ee";
  ctx.font = "900 24px Arial";
  ctx.fillText(label, x + 32, y + 58);

  ctx.fillStyle = "#15191d";
  ctx.font = `${fontSize}px Microsoft YaHei, Arial`;
  drawWrappedText(ctx, text, x + 32, y + 118, w - 64, h - 124, 1.5);
}

async function drawShowcase(ctx) {
  await drawImageBox(ctx, state.showcaseImage, { x: 72, y: 1244, w: 936, h: 230 }, "GAME CARD / DISPLAY IMAGE", "#111820", "#55c7ee", true);
}

function drawFooter(ctx) {
  ctx.strokeStyle = "#07090c";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(72, 1496);
  ctx.lineTo(1008, 1496);
  ctx.stroke();

  ctx.fillStyle = "#657782";
  ctx.font = "900 20px Arial";
  ctx.fillText("LOCAL ARCHIVE ONLY", 72, 1538);
  ctx.fillText("DATA EXPUNGED WHEN EMPTY", 690, 1538);
}

async function drawImageBox(ctx, source, rect, placeholder, fill, border, dark) {
  ctx.fillStyle = fill;
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  drawPattern(ctx, rect, dark);

  if (source) {
    const image = await loadCanvasImage(source);
    drawCoverImage(ctx, image, rect.x, rect.y, rect.w, rect.h);
  } else {
    ctx.fillStyle = dark ? "#a7d7e7" : "#657782";
    ctx.font = "900 28px Arial";
    ctx.textAlign = "center";
    placeholder.split("\n").forEach((line, index) => {
      ctx.fillText(line, rect.x + rect.w / 2, rect.y + rect.h / 2 + index * 36);
    });
    ctx.textAlign = "left";
  }

  ctx.strokeStyle = border;
  ctx.lineWidth = 5;
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
}

function drawPattern(ctx, rect, dark) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
  ctx.clip();
  ctx.strokeStyle = dark ? "rgba(85,199,238,0.18)" : "rgba(85,199,238,0.24)";
  ctx.lineWidth = 4;
  for (let x = rect.x - rect.h; x < rect.x + rect.w; x += 44) {
    ctx.beginPath();
    ctx.moveTo(x, rect.y + rect.h);
    ctx.lineTo(x + rect.h, rect.y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawRedactionBlocks(ctx, x, y, count, size, gap, fill) {
  ctx.fillStyle = fill;
  for (let i = 0; i < count; i += 1) {
    const left = x + i * (size + gap);
    ctx.fillRect(left, y, size, size);
  }
}

function drawPolygon(ctx, points, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.closePath();
  ctx.fill();
}

function loadCanvasImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const imageRatio = image.width / image.height;
  const boxRatio = width / height;
  let sx = 0;
  let sy = 0;
  let sw = image.width;
  let sh = image.height;

  if (imageRatio > boxRatio) {
    sw = image.height * boxRatio;
    sx = (image.width - sw) / 2;
  } else {
    sh = image.width / boxRatio;
    sy = (image.height - sh) / 2;
  }

  ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
}

function drawContainImage(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function fitFont(ctx, text, maxWidth, startSize, family) {
  let size = startSize;
  do {
    ctx.font = `900 ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  } while (size > 24);
  return `900 ${size}px ${family}`;
}

function drawWrappedText(ctx, text, x, y, maxWidth, maxHeight, lineHeightRatio) {
  const chars = Array.from(text);
  const fontSize = Number((ctx.font.match(/(\d+)px/) || [0, 28])[1]);
  const lineHeight = fontSize * lineHeightRatio;
  const lines = [];
  let line = "";

  chars.forEach((char) => {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);

  const maxLines = Math.max(1, Math.floor(maxHeight / lineHeight));
  lines.slice(0, maxLines).forEach((lineText, index) => {
    const output = index === maxLines - 1 && lines.length > maxLines ? `${lineText.slice(0, -1)}…` : lineText;
    ctx.fillText(output, x, y + index * lineHeight);
  });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

render();
