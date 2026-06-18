class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        m_per_deg = 360 / 60
        h_deg = hour * 5 * m_per_deg if hour < 12 else 0
        m_deg = minutes * m_per_deg
        if minutes > 0:
            h_deg += (5 / (60 / minutes)) * m_per_deg
        return min(abs(h_deg - m_deg), 360 - abs(h_deg - m_deg))