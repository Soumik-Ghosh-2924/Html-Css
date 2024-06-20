setInterval( () => {
    d = new Date();
    h_time=d.getHours();
    m_time=d.getMinutes();
    s_time=d.getSeconds();
    H_rotation=30*h_time + m_time/2 + s_time/120;
    M_rotation=6*m_time+ s_time/10;
    S_rotation=6*s_time;

    hour.style.transform=`rotate(${H_rotation}deg)`;
    minute.style.transform=`rotate(${M_rotation}deg)`;
    second.style.transform=`rotate(${S_rotation}deg)`;

},1000);