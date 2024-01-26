const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks() {
  const token = localStorage.getItem("user");
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  } 
    const responseObj = await response.json();
    return responseObj;
  }

