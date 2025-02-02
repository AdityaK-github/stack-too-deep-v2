=======
# Blockchain Hackathon Project: Personalized Eliza AI Agent

## Project Overview
Welcome to our *Blockchain Hackathon Project! We have developed a **personalized Eliza AI agent* capable of interacting directly with *MetaMask* to perform Ethereum (ETH) transfers between accounts. The agent leverages natural language processing (NLP) to understand user prompts and execute blockchain transactions seamlessly.

Additionally, we attempted to implement two more advanced features:
1. *Memory Storage*: Storing wallet addresses in a unique variable for quick access.
2. *NFT Upload to Pinata*: Uploading NFTs to Pinata using natural language prompts.

While the core functionality of ETH transfers is fully operational, the additional features faced integration challenges and are not fully implemented.

---

## Features

### 1. *ETH Transfers via MetaMask*
- The Eliza AI agent can interact with MetaMask to:
  - Send ETH from one account to another.
  - Confirm transactions with the user before execution.
  - Handle natural language prompts like:
    - "Send 0.1 ETH to 0x1234..."
    - "Transfer 1 ETH to Alice."

### 2. *Memory Storage (Incomplete)*
- The agent was designed to store wallet addresses in a unique variable for quick access.
  - Example: "Save 0x1234... as Alice."
  - Future goal: Retrieve saved addresses for transactions (e.g., "Send 0.5 ETH to Alice").

### 3. *NFT Upload to Pinata (Incomplete)*
- The agent was intended to upload NFTs to Pinata using natural language prompts.
  - Example: "Upload this image as an NFT."
  - Future goal: Automatically generate metadata and upload to Pinata.

---

## Technologies Used

### Backend
- *Eliza AI Agent*: Core NLP engine for understanding user prompts.
- *Web3.js*: Interacting with the Ethereum blockchain and MetaMask.
- *Node.js*: Backend server for handling API requests.
- *Express.js*: Framework for building the backend API.

### Frontend
- *React.js*: Frontend framework for building the user interface.
- *MetaMask*: Browser extension for wallet integration.
- *Tailwind CSS*: Styling the UI components.

### Additional Tools
- *Pinata*: For NFT storage (incomplete integration).
- *Ethereum Testnet*: For testing ETH transfers (e.g., Goerli or Sepolia).

---

## How It Works

### 1. *ETH Transfers*
1. The user provides a natural language prompt (e.g., "Send 0.1 ETH to 0x1234...").
2. The Eliza AI agent parses the prompt to extract:
   - The amount of ETH to send.
   - The recipient's wallet address.
3. The agent interacts with MetaMask to:
   - Initiate the transaction.
   - Confirm the transaction with the user.
4. Once confirmed, the transaction is executed on the Ethereum blockchain.

### 2. *Memory Storage (Incomplete)*
1. The user provides a prompt to save a wallet address (e.g., "Save 0x1234... as Alice").
2. The agent stores the address in a unique variable for future use.
3. Future goal: Retrieve the saved address for transactions (e.g., "Send 0.5 ETH to Alice").

### 3. *NFT Upload to Pinata (Incomplete)*
1. The user provides a prompt to upload an NFT (e.g., "Upload this image as an NFT").
2. The agent extracts the image file and metadata from the prompt.
3. Future goal: Upload the NFT to Pinata and generate a transaction hash.

---

## Setup Instructions

### Prerequisites
- *Node.js* (v16 or higher)
- *MetaMask* browser extension
- *Ethereum Testnet* account (e.g., Goerli or Sepolia)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blockchain-hackathon-project.git
2. Use following link to quick setup to eliza framework
    https://elizaos.github.io/eliza/docs/quickstart/

# Future Enhancements

## Persistent Memory Storage
Implement a robust database system for storing and retrieving wallet addresses.

### Key Features:
- Secure wallet address indexing
- Transaction history tracking
- User wallet mapping
- Address verification mechanisms

### Implementation Considerations:
- Database schema design for efficient queries
- Data encryption for sensitive information
- Backup and recovery systems
- Performance optimization for large-scale operations

## NFT Upload Integration
Complete Pinata integration for streamlined NFT uploads [pinata.cloud](https://pinata.cloud).

### Core Components:
- IPFS file storage interface
- Metadata management system
- Upload progress tracking
- Content verification

### Technical Requirements:
- Pinata SDK integration
- File handling and validation
- Metadata formatting compliance
- Error handling and retry mechanisms

## Multi-Chain Support
Extend blockchain compatibility to support multiple networks.

### Target Networks:
- Polygon
- Binance Smart Chain
- Additional EVM-compatible chains

### Implementation Strategy:
- Chain-specific configuration management
- Cross-chain transaction handling
- Network fee optimization
- Gas price monitoring systems

## Enhanced Security
Implement comprehensive security measures for transactions and authentication.

### Security Layers:
- Multi-factor authentication
- Transaction verification protocols
- Wallet address validation
- Access control mechanisms

### Implementation Details:
- Secure key management
- Transaction signing verification
- Rate limiting and monitoring
- Security audit logging
>>>>>>> 65db6277316d69d5d27189ed89d7e9d58424521d
