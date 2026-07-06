what is prompt engineering :-

-prompt engineering is thee practice of designing and refining the instruction (called prompts)
given to ai model get betterr, more accurate useful output.

what is LLM :-

-LLm stands for large language model.
-it is an Ai model trainded on massive amount of text data to ->

1. understand language
2. predict the next  word in a sentence 
3. generate meaningful response

ex. google keyboard

Role of LLM in prompt Enginnering:-
- prompt engineering -> how you talk
- LLM  -> who are you tyaking you 


- llm help's us to ->

1. read your prompt
2. interpret our intent
3. genereate a good resoponse based on our prompt.

MODULE 1 -> Introduction to LLM & prompt engineering  or basics

Descriminative AI ->
- Desciminative AI is  a AI technique that helps us to classify the data.
- ex.
1. Email - spam &  not spam 
2. face id (face recognition)
3. Netflix recomendation  etc..

Generative AI ->

- In genereatibe AI , it not only classify the data but it generate the data (new) through AI
- ex-.

1. Chatgpt (text generation/image)
2. Midjourney (image generation )
3. Githup copilot (code generation) etc..

Evolution of -> RNN, LSTM & transformer

1. RNN(Recurrent Neural Network)
-  An RNN is a type of neural network designed to process sequential  data like..

  - text
  - speech
  - time series etc..

- it proces the data step by step.
- it remember previous information using the hidden state in RNN.

Previous inf. ->RNN -> new inf.
EX. Sentence  - "i love AI"
RNN reads it - "i" ->  then "love" -> "AI"

(Like keping memory of previous word)

 The disadvantages of ->

   1. it can't remember a long sentence because of short memory. 
   2. Struggle with reading long sentence.


 2. LSTM()
 - it stands for long short-term memory.
 - it is an improve version of RNN

 HOW LSTM works ->
  - LSTM uses gates to control info.
    - forget gate -> removes the useless data
    - input gate -> adds new data/ info.
    - output gate -> decides what's the output
- bassically it acts like a "smart memory system"
 Advantges->

  - it solve RNN's memory problem.
  - wroks well for 

    - language translation 
    - speech recognition
    - Time-series prediction  


3. Transformer ->
 - transformer is a modern AI arcitechture that power LLM's (like C gpt)

 HOW it works ->
 - uses self-attention mecanism.
   ( it allows to understand context , relation between words in a seqence)
 - looks at all words at once , not step by step.

 ex. the animal didn't cross the road because it was tired 

 - in this ex, the ransformer understand "it" refers to animal using attention mechanism.  

Advantages->
1. handle long context very well .
2. Faster (processing is very first)
3. give more accurate o/p than RNN/LSTM

feature           RNN            LSTM            Transformer
data processing   .seqential     .seqential      .parallel
memory            .short         . long          . very long
speed             . slow         . slow          . fast
Performance       . basic        .better         . best

Prompt Engineerimg->
- by the help of transformer we can dpo the prompt engineering in a better way.

1. long context : given by transformer helps to memorise the long context given by in the prompt .(it works on parallel data processing)
2. Contextual Engineering : if we can put some word in different form the transformer also understand
word properly.

ex. Bank( river bank , financial bank)
- AI don't read our words , it reads tokens
- we can't take 1 token  as a 1 word , Although "unbeliavale word can sergigate to different token.

ex.
- word : "playing" -> play + ing
- words : "tranformation" -> trans + form + ation
 
 - AI  didn't understand words directly so we can sregigate different token to form prefix(re-, un-)
 & suffix(-ing, -action,-ed) so that AI can recreate some words by recognize it roperly.

 Token->
 AI Tools   approx token limit 

 C gpt      ~128,000 to ~256,000 token 
            (dependig on version)

 Gemini     ~1,000,000 to ~2,000,000 tokens

 Claude     ~2,000,000 tokens (standards)
            upto ~1,000,000 token (enterprise)

 perplexity ~128,000 to ~200,000 tokens    


 1. C gpt -> excelent for long discussion, essays , emails, summerization within it's ~128 - ~256 tokens.
 2. Gemini -> processing multiple books , large size docs at once, large codebase analysis in one snapshot, complex project tasks across long charts etc..

 3. claude -> it deal with large doc reasoining/scanning with more safely.

 4. perplexity -> uses in various backend model.

   Structure Prompting ->

   1. Role (Person role)
   2. context 
   3. Task (what action we perform)
   4. Constraints(negative constraints)
   5. Output        

   we can take some scenario for prompting ->
    use case 1 : writting & content creation 

    simple prompt -> write a cold email for google internship.

    engineering prompt ->
    
     [
      "act as a carrier coach. write a pdrsonalize cold email to a recruiter at google for a data science internship. Mention my proficiency in python and sql . keep the tone professional but eager & limit it to 150 words"
      ]

      use case 2 : coding & technical task 
      simple prompt -> fix this code  (some code)

      E.prompt -> "act as a senior python developer . review the following code for a log-in logics, identify potential security vulnerabilities and logical errors. provide the correccted code with comments-explaining  each fix.

 MODULE 2: -> core prompting technique ->

    1. zero short prompting : "direct order "
      - in this prompting we didn't give any example to AI but we provide a small instruction and we think that by the help of pre-trained knoweldge , AI will provide the answers .

      prompt-> classify the sentiment of this review: "the battery life of this laptop is amazing but the screen is a bit dull."
      output -> mixed/neutral.
      
      
      
   2. few short prompting : the "pattern maker"

      - we have faced some problem on zero short prompting because sometimes it failled it but few short prompting, we have to give some example to understand the pattern of our prompt then it gives a good response.

      ex. give the customer format feedback in json format.

      i/prompt ->
      ex 1 : i love the pizza! -> {"sentimate" : "positive" : "label" : 1}
      ex 2 : the delivery was late -> {sentimate : "negative", "label" : 0}
      ex 3 : the food was okey -> { "sentimate" : "neutral" : "label" : 0.5 }

3. chain of thought (cot) : the "logical thinker"
- this is the most imp. technique to solve complex problem. if we can put anything in AI can think  and we give prompt "think step by step" but AI will look in full sentence and create a little "hallucination" / confusion.

- use case ->
- prompt -> "a farmer has 15 sheep. All but 8 die . How much are left ? let's think step-by-step"

1. total sheep - 15
2. all but 8 die means only 8 are left but rest sheep are die.
3. so only 8 sheep's are present

final ans is - 8

4. Instruction prompting : framework
- in this prompting we can put step-by-step instruction so that it will give the required output.

- persona (role) : act as senior python developer  
- constraints(limits) : "don't use external liabaries.keep code under 20 lines"
- specific instruction : "explain the code like i am 5 years old"

     use case -> writting professional email
    prompt -> "act as a polite HR manager . write a rejection email for a condition who cleared the interview but we can't hire due to budget cuts. Mention that we will keep their cv for future 

MODULE 3 - advanced prompt engineering Frameworks
1. React Framework (reason + action)
 
 - React means reason + acting.
 - before some time AI only think or AI only give the result but now in React framework Ai will work on the basis of a loop. like it will think first then give the result then think again wheather it's right or wrong again give the result.

 use case -> Researching a market trend using AI with browising capabilities (like c gpt with search or perplexity)

 prompt -> "solve the following task using a thought-action-observation loop. task: analyze the curent stock performance of NVIDIA compared to its compititors 

2. THree of thoughts(TOT)
   - "three of thoughts" is more efficient than "chain of thoughts" , we can say TOT is big brother of COT
   - in"COT" AI can think for only one line but in "TOT" it can segrigate one line into different branches / nodes like as a tree then think it separately.


