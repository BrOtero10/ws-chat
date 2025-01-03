export const formatTimestampForMessage = (timestamp) => {
    const timestampSplited = timestamp.split('T');

    const dateSplited = timestampSplited[0].split('-');
    const formatedDate = checkDateAndSimplify(timestampSplited[0]);

    const timeSplited = timestampSplited[1].split(':');
    const formatedTime = `${timeSplited[0]}:${timeSplited[1]}`;

    return `${formatedDate} ${formatedTime}`
}

function checkDateAndSimplify(date) {
    const nowDate = new Date();
    let stringDate = nowDate.toISOString().split('T')[0];

    // Verifica se a data é hoje
    if (stringDate === date) return 'Hoje';

    // Verifica se a data é ontem
    const yesterdayDate = new Date(nowDate);
    yesterdayDate.setDate(nowDate.getDate() - 1);
    let stringYesterdayDate = yesterdayDate.toISOString().split('T')[0];
    if (stringYesterdayDate === date) return 'Ontem';

    // Retorna a data no formato 'dd/mm/yyyy'
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}