import '../css/ContactPage.css';
import '../index.css';

import contactTitle from '../assets/contact-title.svg';

function ContactPage() {
  return (
    <div className="App">
      <div style={{width: '100%' }}>
        {/* 作品標題區塊 */}
        <section className="px-0 py-0">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <img
      src={contactTitle}
      alt="聯絡資訊標題圖"
      style={{
        width: '20vw',
        maxWidth: '280px',
        minWidth: '150px',
        marginTop: '110px',
      }}
    />
  </div>
</section>


      {/* 黑色線條 */}
      <div
        className="line-grow"
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: 'black',

        }}
      ></div>

      {/* 聯絡方式區塊 */}
      <section
        style={{
          maxWidth: '1250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '30px',   // 保持原本高度
          padding: '20px',
          fontSize: '18px',
        }}
        className="fade-up-delay"
      >
        <h2 style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500' }}>
          謝謝您造訪本網站
        </h2>
        <h2 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '500' }}>
          有任何問題或邀約歡迎使用下面的表格詢問我
        </h2>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          在極少數情況下 可能會出現聯絡表單提交錯誤
        </p>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          如果您在 1-2 個工作天內未收到回覆或無法透過表單傳送
        </p>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          請直接透過我的信箱「anna0826777@gmail.com」與我聯繫 
        </p>
        
      </section>
    </div>
    </div>

  );
}

export default ContactPage;
