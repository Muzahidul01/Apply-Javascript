def detect_fake_news(news, source):
if source.lower() in ["facebook", "whatsapp", "telegram"]:
    print("Don't believe things on FB, Whatsapp, and Telegram")
else:
print("Source seems fine")

news_input = input("Enter the news: ")
source_input = input("Enter the source: ")
detect_fake_news(news_input, source_input)