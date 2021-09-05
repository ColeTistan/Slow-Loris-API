from bs4 import BeautifulSoup as Soup
import requests

url = 'https://en.wikipedia.org/wiki/Slow_loris'
response = requests.get(url)

soup = Soup(response.content, 'html.parser')

# retrieves table data with attribute type and name
def get_table(attr_name):
    table = soup.find('table', class_=attr_name)
    return table

def get_table_data(table):
    for table_data in table.find_all('tr'):
        data = table_data.find('td')
        if data == None:
            continue
        print(data)

info_table = get_table('infobox')
wiki_table = get_table('wikitable')
print(get_table_data(wiki_table))
# print(get_table_data(info_table))


