# What is Web Performance?

  It is the speed and efficiency with which a website/web application loads, renders and responds to interractions from visitors.

# What does slow look like?

  - Long time taken for page to load
  - Elemenets jumping around
  - Delays to click responses
  - Slow loading of images and vidoes
  - Laggy scrolling and animations

# Why care about web performance?

  - User Experience:
    Reduce fustration, This is how well the website meets or exceeds user epectations.

    - For effective communication some sort of reqsponse is needed within 2 seconds of a request. A longer wait break s concentration and affects productivity.
      - User expectations (Usability Engineering (Neilsen)):
        - 0.01 seconds: instant
        - 1 second uninterrupted flow
        - 10 break flow, fustration

      - Some useful stats (Time is Money, Everts):
        - 40% of users abandon a site at 3 seconds
        - 75% users that experience a slow site will not return

  - SEO:
    How well you are able to help search engines understand and rank your content.
    [Some Good Stats on CTR](https://backlinko.com/google-ctr-stats)

    - #1 Ranking Page gets 10 times more click than number 10![alt text](image-6.png)
    ![CTR Beakdown by Position](image.png)

    -  As 2020, Google made it a thing that the performance of your site will impact your site ranking ===> You need to be fast to rank well.

  
  - Common themes: 
    - Increase number of users coming to us, 
    - Reduce number of users leaving,
    - Increase number of users returning

    - i.e we want more users to our app, but why?? CONVERSION

  - Case studies of the impact of web performance optimazation found [here](https://wpostats.com/)

# How do we measure web performance?

  - We use waterfall chart to measure how fast a web app is.

  - It usually shows the lifecycle of a page from the request to full load
  
  ![Waterfall Chart Example 1](image-2.png)
  
  ![Waterfall Chart Example 2](image-2.png)
  
  ![Waterfall Chart Example 3](image-3.png)
  
  - The colors have meaning:
    - Blue: HTML Documents
    - Purple: Stylesheets
    - Yellow: Javascript
    - Green: Images
    - Brown: Fecth/Other
    - Teal: Fonts 

# Legacy Metrics:

  - ## DOMContentLoaded:
    The HTML document had been donwload and deferred scripts have been executed:


    Here the structure of the page is done but images may not be displayed yet.

    ```
      window.addEventListener('DOMContentLoaded', (event) => {
        console.log(`DOMContentLoaded at ${event.timeStamp} ms`)
      })
    ```

    ![DOMContentLoaded](image-4.png)


  - ## Load:
    HTML and all known ressources have been downloaded and rendered. Except those that are lazy loaded.

    Here the spinner on the browser disappears. The document is ready and updates can be done.

    ```
      window.addEventListener('load', (event) => {
        console.log(`DOMContentLoaded at ${event.timeStamp} ms`)
      })
    ```

    ![Load](image-5.png)

  
# Problem with Legacy Metrics:
  - With the introduction of client-side rendering these 2 metrics above mean nothing because the document loaded into the browser is empty,
  the two events would happen right away, thus telling us nothing about the page performance.