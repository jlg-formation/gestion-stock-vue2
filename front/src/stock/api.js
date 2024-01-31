import { sleep } from "@/utils/misc";

const url = "http://localhost:3000/api/articles";

class API {
  async add(newArticle) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newArticle),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 400) {
      throw new Error("Erreur Technique");
    }
  }

  async getArticles() {
    await sleep(300);
    const response = await fetch(url);
    if (response.status >= 400) {
      throw new Error("Erreur Technique");
    }
    const articles = await response.json();
    return articles;
  }

  async remove(ids) {
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(ids),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 400) {
      throw new Error("Erreur Technique");
    }
  }
}

export const api = new API();
