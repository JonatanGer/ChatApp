# ChatApp

En enkel chattapplikation byggd med ASP.NET Core och SignalR där flera användare kan skicka meddelanden till varandra i realtid.

## Funktioner
- Ansluta med användarnamn.
- Skicka och ta emot meddelanden i realtid.
- Flera användare kan chatta samtidigt.
- HTTPS/TLS för säker kommunikation.

## Starta projektet
1. Klona repot från GitHub.
2. Öppna projektet i Visual Studio med .NET 9 installerat.
3. Starta applikationen med HTTPS.
4. Öppna två flikar för att testa chatten med olika användarnamn.

## Säkerhet
Kommunikationen skyddas med HTTPS/TLS och ett lokalt utvecklingscertifikat. TLS skyddar meddelandena under överföringen, men servern kan fortfarande läsa dem.

## Testning
Jag har testat att skicka meddelanden mellan två flikar och kontrollerat att man inte kan ansluta utan användarnamn eller skicka tomma meddelanden.

## AI-användning
Jag har använt ChatGPT som hjälp med delar av koden, felsökning och för att förstå SignalR. Jag har gått igenom och testat koden för att förstå hur den fungerar.
