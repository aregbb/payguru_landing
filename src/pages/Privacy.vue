<script setup lang="ts">
import { onBeforeMount, computed } from "vue";
import Logo from "@/assets/img/Logo.svg"
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function setTab(tab: 'privacy' | 'terms') {
  router.replace({ hash: `#${tab}` })
}

const activeTab = computed<"privacy" | "terms">(() => {
  const h = (route.hash || "").replace("#", "");
  if (h === "terms") return "terms";
  return "privacy"; // дефолт
});

onBeforeMount(() => {
  if (!route.hash) router.replace({ hash: "#terms" });
})

</script>

<template>
  <div class="privacy-page">
    <header class="privacy-page__header header">
      <div class="privacy-page__container header__content">
        <router-link :to="'/'" class="header__logo">
          <img :src="Logo" alt="logo" />
          <span class="header__logo-text">PayGuru</span>
        </router-link>
        <div class="header__text">Legal Center</div>
      </div>
    </header>
    <section class="privacy-page__content-wrap">
      <div class="privacy-page__container">
        <div class="privacy-page__content">
          <ul class="privacy-page__content-left">
            <li class="tab" :class="{ 'tab--active': activeTab === 'terms' }" @click="setTab('terms')">Terms of Service</li>
            <li class="tab" :class="{ 'tab--active': activeTab === 'privacy' }" @click="setTab('privacy')">Privacy Policy</li>
          </ul>
          <div class="privacy-page__content-right">
            <template v-if="activeTab === 'privacy'">
              <div class="privacy-page__content-header flex justify-between items-baseline">
                <h1>Privacy Policy for PayGuru Platform</h1>
                <a
                    href="/static/docs/Privacy.docx"
                    download
                    class="btn-primary"
                >
                  Download
                </a>
              </div>

              <div>
                <h4>1. General Provisions</h4>
                This Privacy Policy (the “Policy”) governs the processing of information in connection with the use of the PayGuru technological platform.
                <br>
                The PayGuru platform is a technological solution designed to automate and coordinate interactions between authorized participants within agreed partner models. The platform is not intended for public consumer use and does not provide services directly to end users.
              </div>
              <hr>
              <div>
                <h4>2. Jurisdiction and Regulation</h4>
                Information processing is conducted within the operational structure registered under the jurisdiction of Nevis.
                <br>
                This jurisdiction is selected to ensure operational flexibility and coordination between infrastructure participants. Unless otherwise agreed in writing, applicable law shall be the law of the operating company’s jurisdiction.
              </div>
              <hr>
              <div>
                <h4>3. Purpose of Information Processing</h4>
                The platform processes information solely for the following purposes: <br>
                <ul>
                  <li>ensuring stable and reliable operation of the platform;</li>
                  <li>technical support and diagnostics;</li>
                  <li>monitoring system security and preventing abuse;</li>
                  <li>automating interactions between authorized participants via platform interfaces;</li>
                  <li>maintaining technical logs, records and operational reporting.</li>
                </ul>
                Information processing is limited to the scope necessary to achieve the above purposes.
              </div>
              <hr>
              <div>
                <h4>4. Categories of Processed Information</h4>
                As part of its technical operations, the platform may process and temporarily store the following categories of information:
                <br>
                <ul>
                  <li>technical identifiers (IP address, user-agent, traceID);</li>
                  <li>contact information provided by platform participants (email address, Telegram account);</li>
                  <li>integration parameters (API keys, callback URLs);</li>
                  <li>activity logs, system events, errors and incident records;</li>
                  <li>metadata related to transaction routing, processing logic and internal notifications.</li>
                </ul>
                The platform <strong>does not store payment card data, bank account credentials or end-user funds.</strong>
                <br>
                In certain scenarios, including e-commerce or payment orchestration models, the platform may technically receive, transmit or relay data provided by participants <strong>solely for the purpose of routing such data to authorized third-party service providers.</strong> Such processing is automated, transient and limited to technical transmission, without independent use, retention or control of such data by the platform.
              </div>
              <hr>
              <div>
                <h4>5. Technical Security Measures</h4>
                The platform applies technical and organizational measures to protect processed information, including:
                <br>
                <ul>
                  <li>transport-level encryption (SSL/TLS);</li>
                  <li>role-based authentication and access control;</li>
                  <li>separation of production and testing environments;</li>
                  <li>access control via IP restrictions and key management;</li>
                  <li>centralized logging, monitoring and alerting.</li>
                </ul>
                <br>
                The platform’s security architecture follows principles aligned with applicable PCI DSS requirements within the technical scope of platform operations.
              </div>
              <hr>
              <div>
                <h4>6. Interaction with Third Parties</h4>
                Information may be transmitted to third parties only to the extent necessary to: <br>
                <ul>
                  <li>ensure technical compatibility of integrations;</li>
                  <li>fulfill contractual arrangements between authorized participants;</li>
                  <li>support infrastructure services such as hosting, storage, monitoring and security.</li>
                </ul>
                All third-party interactions are limited to the minimum scope required for platform functionality.
              </div>
              <hr>
              <div>
                <h4>7. Data Retention</h4>
                Information is retained for the period established by the platform’s internal technical and operational policies.
                <br>
                Data deletion or anonymization is performed automatically upon expiration of the applicable retention period or upon agreement with the relevant platform participant.
              </div>
              <hr>
              <div>
                <h4>8. Final Provisions</h4>
                Use of the PayGuru platform constitutes acceptance of this Privacy Policy. <br>
                The platform operator reserves the right to update this Policy to reflect technical, operational or regulatory changes.
              </div>
            </template>
            <template v-if="activeTab === 'terms'">
              <div class="privacy-page__content-header flex justify-between items-baseline">
                <h1>Terms of Service for PayGuru Platform</h1>
                <a
                    href="/static/docs/Terms.docx"
                    download
                    class="btn-primary"
                >
                  Download
                </a>
              </div>

              <div>
                <h4>1. General Provisions</h4>
                These Terms of Service (hereinafter referred to as the “Terms”) govern the access to and use of the PayGuru technological platform, including its web interfaces, APIs, dashboards and related infrastructure.
                <br>
                PayGuru is a <strong>technology platform providing tools for orchestration, coordination and automation of payment-related processes</strong> between independent participants of an agreed partner model.
                <br>The platform is <strong>not a public service</strong>, does not constitute a public offer and is available exclusively to authorized partners upon prior agreement.
                <br>
                PayGuru <strong>does not act as a bank, payment institution, money service business, escrow agent or financial intermediary,</strong> unless explicitly agreed otherwise in a separate written agreement.
              </div>
              <hr>
              <div>
                <h4>2. Access and Registration</h4>
                Access to the platform is granted only after: <br>
                <ul>
                  <li>verification of the partner,</li>
                  <li>confirmation of the intended use case,</li>
                  <li>alignment on technical and operational requirements.</li>
                </ul>
                Registration, access provisioning and API credentials issuance are performed manually by authorized administrators or designated representatives.
                The Company reserves the right to refuse or revoke access at its sole discretion.
              </div>
              <hr>
              <div>
                <h4>3. Platform Functionality</h4>
                The PayGuru platform provides a set of <strong>technical tools for managing and coordinating payment flows,</strong> including but not limited to:
                <br>
                <ul>
                  <li>creation and management of transaction records;</li>
                  <li>routing and distribution of transactions between independent third-party providers;</li>
                  <li>status tracking, callbacks and notifications;</li>
                  <li>dispute handling workflows;</li>
                  <li>reporting, analytics and reconciliation tools;</li>
                  <li>API-based integrations.</li>
                </ul>
                All functionality is <strong>configured individually per partner and project</strong>  and reflects technical coordination logic rather than financial execution.
              </div>
              <hr>
              <div>
                <h4>4. Role of PayGuru and Payment Operations</h4>
                PayGuru acts solely as <strong>a technological intermediary and orchestration layer.</strong>
                PayGuru: <br>
                <ul>
                  <li>does <strong>not</strong> accept funds from end users;</li>
                  <li>does <strong>not</strong> hold, store or custody fiat assets;</li>
                  <li>does <strong>not</strong> initiate or execute financial transfers;</li>
                  <li>does <strong>not</strong> guarantee completion of transactions by third parties.</li>
                </ul>
                All payment operations, including fund transfers, currency exchange, settlement and liquidity provision, are executed by <strong>independent third-party providers, executors or counterparties,</strong>  selected by the partner or determined by agreed routing logic.
                <br>
                Any transfer of value occurs <strong>outside of PayGuru’s control</strong> and responsibility.
              </div>
              <hr>
              <div>
                <h4>5. User Responsibilities</h4>
                The user agrees to: <br>
                <ul>
                  <li> comply with all applicable laws and regulations in their jurisdiction;</li>
                  <li>ensure that their use of the platform does not violate third-party rights;</li>
                  <li>provide accurate and lawful information where required;</li>
                </ul>
                independently assess the risks associated with payment operations and third-party providers. <br>
                The user acknowledges that <strong>all business, financial and regulatory risks remain solely on the user and their counterparties.</strong>
              </div>
              <hr>
              <div>
                <h4>6. Security and Confidentiality </h4><br>
                The user is responsible for safeguarding access credentials, API keys and authentication data. <br>
                The platform employs technical security measures including encryption, access controls, logging and monitoring.<br>
                However, PayGuru <strong>does not guarantee uninterrupted operation or absolute security</strong> and shall not be liable for incidents caused by external systems, providers or user-side failures.<br>
              </div>
              <hr>
              <div>
                <h4>7. Disputes and Adjustments</h4> <br>
                The platform may provide technical mechanisms for dispute handling, transaction adjustments and status corrections.
                Such mechanisms: <br>
                <ul>
                  <li>do not constitute acceptance of liability by PayGuru;</li>
                  <li>are executed strictly within the agreed technical workflows;</li>
                  <li>do not imply financial responsibility for transaction outcomes.</li>
                </ul>
                Final responsibility for dispute resolution lies with the parties involved in the underlying transaction.
              </div>
              <hr>
              <div>
                <h4>8. Limitation of Liability</h4>
                To the maximum extent permitted by applicable law: <br>
                <ul>
                  <li>PayGuru shall not be liable for indirect, incidental or consequential damages;</li>
                  <li>PayGuru shall not be responsible for losses resulting from actions or omissions of third-party providers;</li>
                  <li>PayGuru shall not be liable for failed, delayed or reversed transactions executed outside its infrastructure.</li>
                </ul>



                The platform is provided <strong>“as is” and “as available”</strong> without warranties of any kind.
              </div>
              <hr>
              <div>
                <h4>9. Amendments</h4>
                The Company reserves the right to modify these Terms at any time. <br>
                Updated versions will be published on the website or made available through the platform interface. <br>
                Continued use of the platform constitutes acceptance of the updated Terms. <br>
              </div>
              <hr>
              <div>
                <h4>10. Governing Law and Company Information</h4>
                The platform is operated by: <br>
                <ul>
                  <li><strong>IntegraNova Dynamics LLC</strong></li>
                  <li>Jurisdiction: Nevis</li>
                  <li>Registration No.: L 24105</li>
                </ul>
                These Terms shall be governed by and construed in accordance with the laws applicable to the operating company’s jurisdiction, unless otherwise agreed in writing.
                <br>
              </div>
              <hr>
              <div>
                <h4>11. Final Provisions</h4>
                PayGuru functions exclusively as <strong>a technological coordination platform</strong> between independent participants.
                <br>
                By using the platform, the user confirms full understanding of PayGuru’s role, accepts these Terms and acknowledges that <strong>PayGuru does not act as a financial guarantor or payment processor.</strong>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="privacy-page__container">
        Copyright © 2026, Integranova Dynamics, LLC.
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.privacy-page {
  a {
    color: #3888c2
  }

  &__container {
    width: 90%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 640px) {
      width: 100%;
      padding: 0 16px;
    }
  }

  .header {
    padding: 32px 0;
    border-bottom: 1px solid rgb(56, 136, 194);

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      display: flex;
      align-items: center;
      color: black;
      gap: 9px;

      img {
        width: 40px;

        @media (max-width: 640px) {
          width: 34px;
        }
      }

      &-text {
        font-weight: bold;
        font-size: 34px;

        @media (max-width: 640px) {
          font-size: 28px;
        }
      }
    }
    &__text {
      font-size: 32px;
      color: rgb(56, 136, 194);

      @media (max-width: 640px) {
        font-size: 28px;
      }
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 400;
    color: rgb(93, 100, 111);
    line-height: 1;
    margin-top: 0;

    @media (max-width: 640px) {
      font-size: 28px;
    }
  }

  &__content {
    padding-top: 40px;
    display: flex;
    gap: 45px;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 16px;
      padding-top: 16px;
    }

    &-header {
      @media (max-width: 640px) {
        flex-direction: column;
      }
    }

    ul {
      margin: 10px;
      padding: 0 20px 0;
    }

    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.7rem;
      border-width: 0;
      border-style: solid;
      border-top-color: #d2dde5;
      border-top-width: 1px;
      height: 0;
      width: 100%;
    }

    p {
      font-size: 14px;
      color: rgb(67, 71, 78);
    }

    &-left {
      width: 250px;
      padding: 0;
      list-style: none;
      margin-top: 0;

      @media (max-width: 640px) {
        display: flex;
        width: 100%;
        padding: 0 !important;
        gap: 20px;
        margin: 0 !important;
      }

      .tab {
        color: #3888c2;
        font-size: 15px;
        line-height: 24px;
        padding: 5px 0;

        &--active {
          color: #16354b;
          font-weight: bold;
        }

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    &-right {
      width: fit-content;
    }
  }
  footer {
    margin-top: 40px;
    padding: 13px 0 16px 0;
    border-top: 1px solid #d2dde5;
    text-align: right;
    font-size: 12px;
  }
}
</style>
