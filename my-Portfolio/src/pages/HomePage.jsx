import '../css/HomePage.css';
import '../index.css';

import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1>歡迎來到我的網站</h1>

            <button
                onClick={() => navigate('/')}  // 點按跳到主要內容路由 '/'
                style={{
                    marginTop: '40px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f1f1f1',
                }}
            >
                進入主要內容
            </button>
        </div>
    );
}

export default HomePage;
