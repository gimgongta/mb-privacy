import './App.css'

export function App() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">개인정보처리방침 (Privacy Policy)</h1>

      <p className="mb-4">
        Meditation Booster(이하 “본 앱”)은 사용자의 개인정보를 존중하며, 관련 법령을 준수하여 개인정보를 안전하게
        보호하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. 수집하는 개인정보 항목</h2>
        <p>본 앱은 원칙적으로 개인정보를 수집하지 않습니다.</p>
        <p>
          다만, 다음과 같은 경우에 한하여 필요한 최소한의 정보를 수집할 수 있습니다.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>앱 이용 과정에서 사용자가 직접 제공하는 정보(예: 문의하기 시 이름, 이메일)</li>
          <li>서비스 품질 향상을 위한 로그 정보(앱 사용 기록, 오류 로그, 기기 정보 등 – 개인 식별 불가)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. 개인정보의 이용 목적</h2>
        <ul className="list-disc ml-6">
          <li>앱 서비스 제공 및 개선</li>
          <li>사용자 문의 응대 및 고객 지원</li>
          <li>서비스 오류 분석 및 품질 향상</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. 개인정보의 보관 및 파기</h2>
        <ul className="list-disc ml-6">
          <li>수집된 개인정보는 목적 달성 후 즉시 파기합니다.</li>
          <li>
            법령에 따라 보관 의무가 있는 경우, 해당 기간 동안 안전하게 보관 후 삭제합니다.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. 제3자 제공</h2>
        <p>본 앱은 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
        <p>
          다만, 법령에 의거해 요청이 있는 경우에 한하여 제공할 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. 개인정보 보호를 위한 조치</h2>
        <ul className="list-disc ml-6">
          <li>개인정보를 저장하지 않거나, 필요한 경우 암호화 등 안전한 방법으로 보호합니다.</li>
          <li>개인정보 처리 최소화 및 접근권한 제한을 시행합니다.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. 이용자의 권리</h2>
        <p>
          이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다. 문의는 아래 이메일을 통해 가능합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. 개인정보 보호책임자</h2>
        <p>담당자: [운영자 이름]</p>
        <p>이메일: [연락 이메일]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. 변경 사항 공지</h2>
        <p>
          본 개인정보처리방침은 변경될 수 있으며, 변경 시 본 앱 또는 공지사항을 통해 안내합니다.
        </p>
      </section>

      <p className="mt-8">시행일: 2025년 9월 24일</p>
    </div>
  );
}


export default App
