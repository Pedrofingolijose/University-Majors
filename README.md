# 🎓 Student Major Recommendation Website

This is a full-stack web application designed to help students discover the most suitable university major based on their personality traits and preferences. The system evaluates user responses and provides intelligent recommendations along with major-related information.

---

## 🌟 Key Features

- 🧠 Personality-based major recommendation system
- 📋 Interactive quiz or questionnaire to assess student character
- 🎯 Smart algorithm to match users with ideal majors
- 🏫 Displays detailed information about recommended majors
- 💡 Frontend designed with HTML, CSS, and JavaScript
- 🗃️ Backend built with PHP and MySQL for dynamic data handling
- 🔐 Secure and responsive design

---

## 💻 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **Hosting**: Compatible with Apache/XAMPP/LAMP

---

## 🗂️ Project Structure

```
project-root/
├── index.html               # Landing page
├── quiz.html                # Personality assessment form
├── results.php              # Displays recommended majors
├── styles.css               # All custom styles
├── scripts.js               # Frontend interaction logic
├── config.php               # DB connection settings
├── process.php              # Backend logic to evaluate quiz
├── database.sql             # MySQL schema for majors and user responses
└── README.md
```

---

## ▶️ How It Works

1. Student visits the website and takes a quiz based on their personality.
2. Answers are submitted to the backend via `process.php`.
3. The backend uses a matching algorithm to suggest one or more majors.
4. The student is presented with detailed information about their recommended majors.

---

## 🧪 Sample Quiz Topics

- Interests in science, math, arts, business, etc.
- Preference for indoor/outdoor work
- Logical vs. creative thinking
- Teamwork vs. solo tasks

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/major-recommendation-website.git
```

### 2. Import the database
- Open `phpMyAdmin`
- Create a new database (e.g., `major_recommender`)
- Import `database.sql`

### 3. Configure the database connection
- Update `config.php` with your database username, password, and DB name.

### 4. Launch the website
- Use XAMPP or local server to view `index.html` in browser.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙋 Author

Developed by Rayan Ali Tlais 
Email: [tlsryn2@gmail.com] 
GitHub: [ryn2004t](https://github.com/ryn2004t)

---

## ❤️ Contributions

Contributions and feedback are welcome. Submit a pull request or open an issue to suggest improvements!
