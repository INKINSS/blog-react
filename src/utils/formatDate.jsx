export function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "de enero",
      "de febrero",
      "de marzo",
      "de abril",
      "de mayo",
      "de junio",
      "de julio",
      "de agosto",
      "de septiembre",
      "de octubre",
      "de noviembre",
      "de diciembre",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }