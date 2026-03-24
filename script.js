const copyBtn = document.querySelector("#copyBtn");
const toast = document.querySelector("#toast");

copyBtn?.addEventListener("click", async () => {
  const contact = [
    "김태헌",
    "SideOnAI 대표",
    "th@sideonai.com",
    "010-1111-1111",
  ].join(" | ");

  try {
    await navigator.clipboard.writeText(contact);
    toast.textContent = "연락처를 클립보드에 복사했습니다.";
  } catch (error) {
    toast.textContent = "복사에 실패했습니다. 수동으로 복사해주세요.";
  }

  setTimeout(() => {
    toast.textContent = "";
  }, 2100);
});
