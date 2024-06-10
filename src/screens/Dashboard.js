import React, { useEffect, useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import styles from './Dashboard.module.css';
import Sidebar from '../components/Sidebar';
import LiveVisitors from '../data/LiveVisitors';
import KeyCards from '../components/KeyCards';
import { DateRangePicker } from 'rsuite';
import OperatorsStatus from '../data/OperatorsStatus';
import SentimentChart from '../data/SentimentChart';
import ConversationLineChart from '../data/ConversationLineChart';
import Keyword from '../data/Keyword';
import FirstContactResolution from '../data/FirstContactResolution';
import AddButton from '../components/AddButton';
import AddVisualization from '../components/AddVisualization';

export default function Dashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const [liveVisitors, setLiveVisitors] = useState(null);
  const [operatorsStatus, setOperatorsStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        // Fetch live visitors
        const liveVisitorsResponse = await fetch('http://10.1.3.42:8000/live/7cc44f6d-29de-4a1a-9ac6-2211adbba7e9/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (liveVisitorsResponse.ok) {
          const liveVisitorsData = await liveVisitorsResponse.json();
          setLiveVisitors(liveVisitorsData.live_visitors);
        } else {
          console.error('Failed to fetch live visitors');
        }

        // Fetch operator status
        const operatorsStatusResponse = await fetch('http://10.1.3.42:8000/crispchat/operator_conversations/7cc44f6d-29de-4a1a-9ac6-2211adbba7e9/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (operatorsStatusResponse.ok) {
          const operatorsStatusData = await operatorsStatusResponse.json();
          console.log(operatorsStatusData)
          setOperatorsStatus(operatorsStatusData.operator_conversations);
        } else {
          console.error('Failed to fetch operator status');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Static data for other components
  const conversation_status ={
    resolved_conversation: 420,
    unresolved_conversation: 69,
    pending_conversation: 8008,
  };

  const keyword = [
    { name: 'important', value: 100 },
    { name: 'urgent', value: 80 },
    { name: 'issue', value: 70 },
    { name: 'task', value: 60 },
    { name: 'bug', value: 50 },
    { name: 'feature', value: 40 },
    { name: 'feedback', value: 30 },
    { name: 'question', value: 20 },
    { name: 'error', value: 10 }
  ];

  const dummyData = [
    { date: '2024-01-01', totalConversations: 50, pendingConversations: 10, resolvedConversations: 30, unresolvedConversations: 10 },
    { date: '2024-01-02', totalConversations: 60, pendingConversations: 15, resolvedConversations: 35, unresolvedConversations: 10 },
    { date: '2024-01-03', totalConversations: 70, pendingConversations: 20, resolvedConversations: 40, unresolvedConversations: 10 },
    { date: '2024-01-04', totalConversations: 80, pendingConversations: 25, resolvedConversations: 45, unresolvedConversations: 10 },
    // Add more data points as needed
  ];

  const sentimentData = [
    { name: 'Positive', value: 20 },
    { name: 'Negative', value: 10 },
    { name: 'Neutral', value: 15 },
    { name: 'Inquisitive', value: 30 },
    { name: 'Angry', value: 5 },
  ];

  // Render loading indicator while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bg}>
      <Sidebar />
      <div className={styles.main_content}>
        {/* Your main content goes here */}
        <LiveVisitors data={liveVisitors} />
        <KeyCards data={conversation_status} />
        <div className={styles.date_range}>
          <div className={styles.date_range_label}>
            Global Filter
          </div>
          <DateRangePicker size='md' />
        </div>
        <div className={styles.operators_status}>
          <div className={styles.title}>
            Operators Status
          </div>
          <OperatorsStatus data={operatorsStatus} />
        </div>
        <div className={styles.operators_status}>
          <div className={styles.title}>
            Conversation Status Overtime
          </div>
          <ConversationLineChart data={dummyData} />
        </div>
        <div className={styles.operators_status}>
          <div className={styles.title}>
            Discussed Keywords Volume
          </div>
          <Keyword data={keyword} />
        </div>
        <div className={styles.small_kpi}>
          <div className={styles.metrics}>
            <FirstContactResolution />
          </div>
          <div className={styles.sentiment_chart}>
            <div className={styles.title}>
              Sentiment Counts
            </div>
            <SentimentChart data={sentimentData} />
          </div>
        </div>
        <div className={styles.operators_status}>
          <div className={styles.title}>
            Competitor Mentioned
          </div>
          <div className={styles.subtitle}>
          You have not entered any competitors name yet. Once you add them, they will appear below with their respective frequency.
          </div>
          <AddButton onClick={handleButtonClick}/>
          {isModalVisible && <AddVisualization onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
}
