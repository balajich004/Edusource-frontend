import axios from "axios";

export default class ApiService {
  static BASE_URL = "https://ebookmanagementsystem-production.up.railway.app";

  static getHeader() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  /** AUTH */

  /* This registers a new user */
  static async registerUser(registration) {
    const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
    return response.data;
  }

  /* This logs in a registered user */
  static async loginUser(loginDetails) {
    const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
    return response.data;
  }

  /** USERS */

  /* This gets all users */
  static async getAllUsers() {
    const response = await axios.get(`${this.BASE_URL}/users/all`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This gets user profile info */
  static async getUserProfile() {
    const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This gets a single user by userId */
  static async getUser(userId) {
    const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This gets user reading list by userId */
  static async getUserReadingList(userId) {
    const response = await axios.get(`${this.BASE_URL}/users/get-user-reading-list/${userId}`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This deletes a user by userId */
  static async deleteUser(userId) {
    const response = await axios.delete(`${this.BASE_URL}/users/delete/${userId}`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /** BOOKS */

  /* This adds a new book */
  static async addBook(formData) {
    const result = await axios.post(`${this.BASE_URL}/books/add`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  }

  /* This gets all books */
  static async getAllBooks() {
    const response = await axios.get(`${this.BASE_URL}/books/all`);
    return response.data;
  }

  /* This gets all book types */
  static async getBookTypes() {
    const response = await axios.get(`${this.BASE_URL}/books/types`);
    return response.data;
  }

  /* This gets a book by title */
  static async getBookById(bookTitle) {
    const result = await axios.get(`${this.BASE_URL}/books/book-by-id`, {
      params: { bookTitle: bookTitle },
    });
    return result.data;
  }

  /* This deletes a book by bookId */
  static async deleteBook(bookId) {
    const result = await axios.delete(`${this.BASE_URL}/books/delete/${bookId}`, {
      headers: this.getHeader(),
    });
    return result.data;
  }

  /* This updates a book by bookId */
  static async updateBook(bookId, formData) {
    const result = await axios.put(`${this.BASE_URL}/books/update/${bookId}`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  }

  /** READ BOOK */

  /* This adds a book to the user's reading list */
  static async addBookToReadingList(bookId) {
    const response = await axios.post(`${this.BASE_URL}/readBooks/add/${bookId}`, {}, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This gets the logged-in user's reading history */
  static async getMyReadingHistory() {
    const response = await axios.get(`${this.BASE_URL}/readBooks/my-history`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This gets the logged-in user's reading list */
  static async getMyReadingList() {
    const response = await axios.get(`${this.BASE_URL}/readBooks/reading-list`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /* This removes a book from the user's reading list */
  static async removeBookFromReadingList(bookId) {
    const response = await axios.delete(`${this.BASE_URL}/readBooks/remove/${bookId}`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /** AUTHENTICATION CHECKER */

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }
  static async addBookToReadingHistory(bookId) {
    const response = await axios.post(`${this.BASE_URL}/readBooks/add-to-history/${bookId}`, {}, {
      headers: this.getHeader(),
    });
    return response.data;
  }
}
