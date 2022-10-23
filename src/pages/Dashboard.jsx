import Card from "../reusableComponents/card/Card";
import Target from "../reusableComponents/target/Target";
import Table from "../reusableComponents/table/Table";

const Dashboard = () => {
  return (
    <div>
      <div className="main-content">
        <span className="title">May 2022 Performance</span>
        <div className="cards">
          <Card title="views" digits="7,124,568" />
          <Card title="followers" digits="91,344" />
          <Card title="likes" digits="534,931" />
        </div>
      </div>
      <div className="main-content">
        <span className="title">Statistics</span>
        <div className="cards">
          <Target title="monthly target" achieved="25% achieved" range="25" />
          <Target title="weekly target" achieved="10% achieved" range="10" />
        </div>
      </div>
      <div className="main-content">
        <span className="title">Monthly Tasks</span>
        <div className="table-container">
          <Table
            title="Facebook Ads"
            content="Gain at least 50 visits through facebook ads"
            icon={
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="5" fill="#2F63E8" />
                <path
                  d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                  fill="white"
                />
              </svg>
            }
          />
          <Table
            title="Twitter"
            content="Gain at least 12,500 views on SET posts"
            icon={
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="5" fill="#5FB3F0" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3333 16.125C20.8859 16.125 21.4158 16.3445 21.8065 16.7352C22.1972 17.1259 22.4167 17.6558 22.4167 18.2083V21.3333H28.6667C29.2192 21.3333 29.7491 21.5528 30.1398 21.9435C30.5305 22.3342 30.75 22.8641 30.75 23.4167C30.75 23.9692 30.5305 24.4991 30.1398 24.8898C29.7491 25.2805 29.2192 25.5 28.6667 25.5H22.4167V27.5833C22.4167 28.4121 22.7459 29.207 23.332 29.793C23.918 30.3791 24.7129 30.7083 25.5417 30.7083H28.6667C29.2192 30.7083 29.7491 30.9278 30.1398 31.3185C30.5305 31.7092 30.75 32.2391 30.75 32.7917C30.75 33.3442 30.5305 33.8741 30.1398 34.2648C29.7491 34.6555 29.2192 34.875 28.6667 34.875H25.5417C23.6078 34.875 21.7531 34.1068 20.3857 32.7393C19.0182 31.3719 18.25 29.5172 18.25 27.5833V18.2083C18.25 17.6558 18.4695 17.1259 18.8602 16.7352C19.2509 16.3445 19.7808 16.125 20.3333 16.125Z"
                  fill="white"
                />
              </svg>
            }
          />
          <Table
            title="Facebook"
            content="Promote the SET even on facebook with 5 posts"
            icon={
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="5" fill="#2F63E8" />
                <path
                  d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                  fill="white"
                />
              </svg>
            }
          />
          <Table
            title="Facebook"
            content="Post even photos taken by Micheal Scott (Photographer)"
            icon={
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="5" fill="#2F63E8" />
                <path
                  d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                  fill="white"
                />
              </svg>
            }
          />
          <Table
            title="Twitter Ads"
            content="Gain at least 50 visits through facebook ads"
            icon={
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="5" fill="#5FB3F0" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3333 16.125C20.8859 16.125 21.4158 16.3445 21.8065 16.7352C22.1972 17.1259 22.4167 17.6558 22.4167 18.2083V21.3333H28.6667C29.2192 21.3333 29.7491 21.5528 30.1398 21.9435C30.5305 22.3342 30.75 22.8641 30.75 23.4167C30.75 23.9692 30.5305 24.4991 30.1398 24.8898C29.7491 25.2805 29.2192 25.5 28.6667 25.5H22.4167V27.5833C22.4167 28.4121 22.7459 29.207 23.332 29.793C23.918 30.3791 24.7129 30.7083 25.5417 30.7083H28.6667C29.2192 30.7083 29.7491 30.9278 30.1398 31.3185C30.5305 31.7092 30.75 32.2391 30.75 32.7917C30.75 33.3442 30.5305 33.8741 30.1398 34.2648C29.7491 34.6555 29.2192 34.875 28.6667 34.875H25.5417C23.6078 34.875 21.7531 34.1068 20.3857 32.7393C19.0182 31.3719 18.25 29.5172 18.25 27.5833V18.2083C18.25 17.6558 18.4695 17.1259 18.8602 16.7352C19.2509 16.3445 19.7808 16.125 20.3333 16.125Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
