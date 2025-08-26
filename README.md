# Moralis API Integration – Full Stack Assignment

## Description

Moralis API Integration is a production-ready full stack web application that fetches Ethereum wallet balances through a secure Node.js backend and displays results in a modern React (Next.js) frontend.  
This project demonstrates robust use of the Moralis Web3 API with clean separation of backend and frontend for real-world blockchain development.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Best Practices](#best-practices)
- [Resources](#resources)
- [License](#license)
- [Contact](#contact)

---

## Tech Stack

- **Backend:** Node.js, Express.js, Moralis SDK
- **Frontend:** Next.js (React), Axios
- **API Provider:** Moralis

---

## Features

- Secure API endpoint to fetch Ethereum balances for any wallet address
- Clean modular code structure
- Environment variables for sensitive API keys
- Robust error handling in backend and frontend
- Responsive Next.js frontend for live balance look-up

---

## Folder Structure

```
sn-api/
├── src/
│ ├── index.js
│ ├── routes/
│ │ └── moralis.js
│ └── config/
│ └── moralis.js
├── .env

sn-frontend/
├── lib/
│ └── api.js
├── pages/
│ └── index.js
```


---


## Image Gallery

<table>
  <tr>
    <td><img width="1440" height="715" alt="Home Page" src="https://github.com/user-attachments/assets/5c3224e5-83ab-44c8-9b97-0eabde03a278" />

</td>
    <td><img width="1440" height="717" alt="Provide Address " src="https://github.com/user-attachments/assets/6bb9d988-ae87-4f4e-8a91-90bac91e9074" />
</td>
  </tr>
  <tr>
    <td><img width="1439" height="705" alt="Get Balance" src="https://github.com/user-attachments/assets/72cab48c-d92f-427d-990b-ee990afdad2b" />
</td>
    <td><img width="1439" height="715" alt="Backend Console" src="https://github.com/user-attachments/assets/fc12548a-b8eb-460e-adcd-f1bf4db65ac9" />
</td>
  </tr>
</table>

## Installation

### 1. Clone the Repository


### 2. Backend Setup (`sn-api`)


Create a `.env` file in the `sn-api` folder with:

Start the backend:

Test the endpoint:
### 3. Frontend Setup (`sn-frontend`)

```
cd sn-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Start the backend (`sn-api`)
2. Start the frontend (`sn-frontend`)
3. Visit [http://localhost:3000](http://localhost:3000)
4. Enter an Ethereum address and click **Get Balance**
5. View the ETH balance fetched through Moralis API

---

## Best Practices

- Sensitive API keys are stored via `.env`, not hardcoded
- Modular folder and file layout for scalability and maintainability
- Proper error handling for backend and frontend requests
- Clear separation between backend and frontend logic
- Use of Axios for clean API requests

---

## Resources

- [Moralis Documentation](https://docs.moralis.io/)
- [Express.js Documentation](https://expressjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## License

MIT

---

## Contact

For questions or support, contact [korku167sagar@.com] or open an issue in this repo.
