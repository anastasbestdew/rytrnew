
export default function Left() {
  return (
    <div className="mt-4 mx-6">
        <div className="flex justify-between">
            <div>
                <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select language</label>
                <select id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="🇦🇪">🇦🇪 Arabic</option>
                    <option value="🇧🇬">🇧🇬 Bulgarian</option>
                    <option value="🇨🇳">🇨🇳 Chinese (S)</option>
                    <option value="🇹🇼">🇹🇼 Chinese (T)</option>
                    <option value="🇨🇿">🇨🇿 Czech</option>
                    <option value="🇩🇰">🇩🇰 Danish</option>
                    <option value="🇳🇱">🇳🇱 Dutch</option>
                    <option selected value="0">🇺🇸 English</option>
                    <option value="🇮🇷">🇮🇷 Farsi</option>
                    <option value="🇵🇭">🇵🇭 Filipino</option>
                    <option value="🇫🇮">🇫🇮 Finnish</option>
                    <option value="🇫🇷">🇫🇷 French</option>
                    <option value="🇩🇪">🇩🇪 German</option>
                    <option value="🇬🇷">🇬🇷 Greek</option>
                    <option value="🇮🇱">🇮🇱 Hebrew</option>
                    <option value="🇮🇳">🇮🇳 Hindi</option>
                    <option value="🇭🇺">🇭🇺 Hungarian</option>
                    <option value="🇮🇩">🇮🇩 Indonesian</option>
                    <option value="🇮🇹">🇮🇹 Italian</option>
                    <option value="🇯🇵">🇯🇵 Japanese</option>
                    <option value="🇰🇷">🇰🇷 Korean</option>
                    <option value="🇱🇹">🇱🇹 Lithuanian</option>
                    <option value="🇲🇾">🇲🇾 Malay</option>
                    <option value="🇳🇴">🇳🇴 Norwegian</option>
                    <option value="🇵🇱">🇵🇱 Polish</option>
                    <option value="🇵🇹">🇵🇹 Portuguese</option>
                    <option value="🇷🇴">🇷🇴 Romanian</option>
                    <option value="🇷🇺">🇷🇺 Russian</option>
                    <option value="🇸🇰">🇸🇰 Slovak</option>
                    <option value="🇪🇸">🇪🇸 Spanish</option>
                    <option value="🇸🇪">🇸🇪 Swedish</option>
                    <option value="🇹🇭">🇹🇭 Thai</option>
                    <option value="🇹🇷">🇹🇷 Turkish</option>
                    <option value="🇻🇳">🇻🇳 Vietnamese</option>
                </select>
            </div>
            <div>
                <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select tone</label>
                <select id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="🇦">Appreciative</option>
                    <option value="🇧">Assertive</option>
                    <option value="🇨">Awestruck</option>
                    <option value="d">Candid</option>
                    <option value="e">Casual</option>
                    <option value="f">Cautionary</option>
                    <option value="g">Compassionate</option>
                    <option selected value="1">Convincing</option>
                    <option value="h">Critical</option>
                    <option value="i">Earnest</option>
                    <option value="j">Enthusiastic</option>
                    <option value="k">Formal</option>
                    <option value="l">Funny</option>
                    <option value="m">Humble</option>
                    <option value="n">Humorous</option>
                    <option value="o">Informative</option>
                    <option value="p">Inspirational</option>
                    <option value="q">Passionate</option>
                    <option value="r">Thoughtful</option>
                    <option value="s">Urgent</option>
                    <option value="t">Worried</option>
                </select>
            </div>
        </div>
        <div>
            <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose use case</label>
            <select id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </select>
        </div>
    </div>
  );
}